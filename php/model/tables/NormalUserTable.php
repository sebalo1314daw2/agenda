<?php
    class NormalUserTable extends UserTable {
        /* ============================== Attributes ===================================================== */
        const NAME = "normal_user";
        const COL_ID_USER = "id_user";
        const COL_ALIAS = "alias";
        /* ============================== Methods ===================================================== */
        /**
         * exists()
         * This function indicates if the specified normal user exists in the table or not. It'll look if
         * the name, surnames and alias exists or not
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param NormalUser $normalUser the normal user to check
         * @return bool if the normal user exists in the table or not
         */
        public static function exists($normalUser) {
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "SELECT COUNT(*)
                    FROM "  . self::PREFIX . self::DELIMITER . parent::NAME . ", "                      .
                              self::PREFIX . self::DELIMITER . self::NAME                               .
                  " WHERE " . self::PREFIX . self::DELIMITER . parent::NAME . "."                       .
                              self::COL_ID . " = " . self::PREFIX . self::DELIMITER . self::NAME . "."  .
                              self::COL_ID_USER    . " AND "                                            .  
                              self::PREFIX . self::DELIMITER . parent::NAME . "."                       .
                              self::COL_NAME . " = ? AND "                                              .
                              self::PREFIX . self::DELIMITER . parent::NAME . "."                       .
                              self::COL_SURNAMES . " = ? AND "                                          .
                              self::PREFIX . self::DELIMITER . self::NAME . "."                         .
                              self::COL_ALIAS . " = ?" ;          
            $stmt = $db->prepare($sql);
            // indicate the params of the query
            $stmt->bind_param( "sss", $normalUser->getName(), $normalUser->getSurnames(), $normalUser->getAlias() );
            // execute query
            $stmt->execute();
            // link outcome variables
            $stmt->bind_result($numNormalUser);
            // get the value
            $stmt->fetch();
            // We get the boolean to return
            $exists = $numNormalUser == 1;            
            // close connection
            $db->close();
            // return the boolean
            return $exists;
        }
        /**
         * insert()
         * This procedure inserts the specified normal user to this table
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param NormalUser $normalUser the normal user to insert
         * @return NormalUser the inserted normal user (with its id, too)
         */
        public static function insert($normalUser) {
            // Fistly, we insert the user object
            parent::insert($normalUser);
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "INSERT INTO " . self::PREFIX . self::DELIMITER . self::NAME . " (" .
                    self::COL_ID_USER              . ", " .
                    self::COL_ALIAS                . 
                   ") VALUES ( 
                       ?,
                       ?
                    );";      
            $stmt = $db->prepare($sql);
            // indicate the params of the query
            $stmt->bind_param (
                    "is", 
                    $normalUser->getId(),
                    $normalUser->getAlias()
            );
            // execute query
            $stmt->execute();
            // close connection
            $db->close();
            // return the inserted normal user 
            return $normalUser;
        }
    }
?>
