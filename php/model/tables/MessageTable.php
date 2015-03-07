<?php
    // test
//    require_once '../other_classes/PocketScheduleDB.php';
//    require_once '../tables_item/Message.php';
    class MessageTable {
        /* ============================== Attributes ===================================================== */
        private static $NAME = "adb_message";
        private static $COL_ID = "id";
        private static $COL_ISSUE = "issue";
        private static $COL_MESSAGE = "message";
        private static $COL_EMAIL = "email";
        /* ============================== Methods ===================================================== */
        /**
         * insert()
         * This procedure inserts the specified message to this table
         * @author Sergio Baena Lopez
         * @version 19.0
         * @param Message $msg the message to insert
         */
        public static function insert($msg) {
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "INSERT INTO " . self::$NAME . " (" .
                    self::$COL_ISSUE    . ", " .
                    self::$COL_MESSAGE  . ", " .
                    self::$COL_EMAIL    . 
                   ") VALUES ( 
                       ?,
                       ?,
                       ?
                    );";      
            $stmt = $db->prepare($sql);
            // indicate the params of the query
            $stmt->bind_param( "sss", $msg->getIssue(), $msg->getMessage(), $msg->getEmail() );
            // execute query
            $stmt->execute();
            // close connection
            $db->close();
        }
    }
?>
