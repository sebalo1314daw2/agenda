<?php
    class ImageTable extends Table {
        /* ============================== Attributes ===================================================== */
        const NAME = "image";
        const COL_ID = "id";
        const COL_EXTENSION = "extension";
        const COL_IS_VALID = "is_valid";
        const COL_DEADLINE_VALIDATION = "deadline_validation";
        /* ============================== Methods ===================================================== */
        /**
         * insert()
         * This procedure inserts the specified image to this table
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param Image $image the image to insert
         * @return Image the inserted image (with its id, too)
         */
        public static function insert($image) {
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "INSERT INTO " . self::PREFIX . self::DELIMITER . self::NAME . " (" .
                    self::COL_EXTENSION             . ", " .
                    self::COL_IS_VALID              . ", " .
                    self::COL_DEADLINE_VALIDATION   . 
                   ") VALUES ( 
                       ?,
                       ?,
                       ?
                    );";      
            $stmt = $db->prepare($sql);
            // indicate the params of the query
            $stmt->bind_param (
                    "sis",
                    $image->getExtension(), 
                    $image->getIsValid(), 
                    Utilities::convertDateTimeToString( $image->getDeadlineValidation() ) 
            );
            // execute query
            $stmt->execute();
            // get the id and put it into the image
            $image->setId($db->insert_id);
            // close connection
            $db->close();
            // return the inserted image 
            return $image;
        }
}
?>