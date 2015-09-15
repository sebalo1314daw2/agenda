<?php
    class EmailUserTable extends Table {
        /* ============================== Attributes ===================================================== */
        const NAME = "email_user";
        const COL_ID = "id";
        const COL_ID_USER = "id_user";
        const COL_VALUE = "value";
        const COL_IS_VALID = "is_valid";
        const COL_DEADLINE_VALIDATION = "deadline_validation";
        const COL_ALPHA_NUM_VALIDATION = "alpha_num_validation";
        /* ============================== Methods ===================================================== */
        /**
         * insert()
         * This procedure inserts the specified email user to this table
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param EmailUser $emailUser the email user to insert
         * @return EmailUser the inserted email user (with its id, too)
         */
        public static function insert($emailUser) { 
            // Fistly, we insert the user object (It can be NormalUser or AdminUser)
            $user = $emailUser->getUser();
            switch( get_class($user) ) {
                case "NormalUser":
                    NormalUserTable::insert($user);
                    break;
                case "AdminUser":
                    // AdminUserTable::insert($user);
                    break;
            }
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "INSERT INTO " . self::PREFIX . self::DELIMITER . self::NAME . " (" .
                    self::COL_ID_USER              . ", " .
                    self::COL_VALUE                . ", " .
                    self::COL_IS_VALID             . ", " .
                    self::COL_DEADLINE_VALIDATION  . ", " .
                    self::COL_ALPHA_NUM_VALIDATION .
                   ") VALUES ( 
                       ?,
                       ?,
                       ?,
                       ?,
                       ?
                    );";      
            $stmt = $db->prepare($sql);
            // indicate the params of the query
            $stmt->bind_param (
                    "isiss", 
                    $user->getId(),
                    $emailUser->getValue(),
                    Utilities::convertBoolToInt( $emailUser->getIsValid() ),
                    Utilities::convertDateTimeToString( $emailUser->getDeadlineValidation() ),
                    $emailUser->getAlphaNumValidation()
            );
            // execute query
            $stmt->execute();
            // get the id and put it into the email user
            $emailUser->setId($db->insert_id);
            // close connection
            $db->close();
            // return the inserted email user 
            return $emailUser;
        }
        /**
         * exists()
         * This function indicates if the specified email user exists in the table or not. It'll look if
         * the value exists or not
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param EmailUser $emailUser the email user to check
         * @return bool if the email user exists in the table or not
         */
        public static function exists($emailUser) {
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "SELECT COUNT(*)
                    FROM "  . self::PREFIX . self::DELIMITER . self::NAME                               .                      
                  " WHERE " . self::PREFIX . self::DELIMITER . self::NAME . "."                         .
                              self::COL_VALUE . " = ?";
            $stmt = $db->prepare($sql);
            // indicate the params of the query
            $stmt->bind_param( "s", $emailUser->getValue() );
            // execute query
            $stmt->execute();
            // link outcome variables
            $stmt->bind_result($numEmailUser);
            // get the value
            $stmt->fetch();
            // We get the boolean to return
            $exists = $numEmailUser == 1;            
            // close connection
            $db->close();
            // return the boolean
            return $exists;
        }
    }
?>