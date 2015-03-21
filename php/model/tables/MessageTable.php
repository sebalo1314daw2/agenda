<?php
    // test
//    require_once '../other_classes/PocketScheduleDB.php';
//    require_once '../tables_item/Message.php';
    require_once '../model/tables/Table.php';
    class MessageTable extends Table {
        /* ============================== Attributes ===================================================== */
        const NAME = "message";
        const COL_ID = "id";
        const COL_ISSUE = "issue";
        const COL_MESSAGE = "message";
        const COL_EMAIL = "email";
        /* ============================== Methods ===================================================== */
        /**
         * insert()
         * This procedure inserts the specified message to this table
         * @author Sergio Baena Lopez
         * @version 20.4
         * @param Message $msg the message to insert
         */
        public static function insert($msg) {
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "INSERT INTO " . self::PREFIX . self::DELIMITER . self::NAME . " (" .
                    self::COL_ISSUE    . ", " .
                    self::COL_MESSAGE  . ", " .
                    self::COL_EMAIL    . 
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
