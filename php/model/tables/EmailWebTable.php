<?php
    class EmailWebTable extends Table {
        /* ============================== Attributes ===================================================== */
        const NAME = "email_web";
        const COL_ID = "id";
        const COL_TYPE = "_type";
        const COL_TITLE = "title";
        const COL_CONTENT = "content";
        /* ============================== Methods ===================================================== */
        public static function insert($tableItem) {
            // TODO
        }
        /**
         * findByType()
         * This function finds a email web by type
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param EmailWeb $emailWeb the email web whose type we want to search
         * @return EmailWeb the found email web
         */
        public static function findByType($emailWeb) {
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "SELECT *
                    FROM "  . self::PREFIX . self::DELIMITER . self::NAME                               .                      
                  " WHERE " . self::PREFIX . self::DELIMITER . self::NAME . "."                         .
                              self::COL_TYPE . " = ?";
            $stmt = $db->prepare($sql);
            // indicate the params of the query
            $stmt->bind_param( "i", $emailWeb->getType() );
            // execute query
            $stmt->execute();
            // link outcome variables
            $stmt->bind_result($id, $type, $title, $content);
            // get the value
            $stmt->fetch();
            // We put all the data in the email web object
            $foundEmailWeb = new EmailWeb($id, $type, $title, $content);
            // close connection
            $db->close();
            // return the object
            return $foundEmailWeb;
        }
}
?>