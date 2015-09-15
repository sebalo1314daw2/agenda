<?php
    require_once '../model/tables/ImageTable.php';
    require_once '../model/tables/Table.php';
    class UserTable extends Table {
        /* ============================== Attributes ===================================================== */
        const NAME = "user";
        const COL_ID = "id";
        const COL_ID_IMAGE = "id_image";
        const COL_NAME = "name";
        const COL_SURNAMES = "surnames";
        const COL_PASSWORD = "password";
        const COL_REGISTER_DATE = "register_date";
        /* ============================== Methods ===================================================== */
        /**
         * insert()
         * This procedure inserts the specified user to this table
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param User $user the user to insert
         * @return User the inserted user (with its id, too)
         */
        public static function insert($user) {
            // Fistly, we insert the image object
            ImageTable::insert( $user->getImage() );
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "INSERT INTO " . self::PREFIX . self::DELIMITER . self::NAME . " (" .
                    self::COL_ID_IMAGE              . ", " .
                    self::COL_NAME                  . ", " .
                    self::COL_SURNAMES              . ", " . 
                    self::COL_PASSWORD              . ", " . 
                    self::COL_REGISTER_DATE         . 
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
                    "issss", 
                    $user->getImage()->getId(),
                    $user->getName(),
                    $user->getSurnames(),
                    $user->getPassword(),
                    Utilities::convertDateTimeToString( $user->getRegisterDate() ) 
            );
            // execute query
            $stmt->execute();
            // get the id and put it into the user
            $user->setId($db->insert_id);
            // close connection
            $db->close();
            // return the inserted user 
            return $user;
        }
    }
?>