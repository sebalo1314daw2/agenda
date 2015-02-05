<?php
    require_once '../model/other_classes/PocketScheduleDB.php';
    require_once '../model/tables_item/Web.php';
    // Testing requires
//    require_once '../other_classes/PocketScheduleDB.php';
//    require_once '../tables_item/Web.php';
    class WebTable {
        /* ============================== Attributes ===================================================== */
        private static $NAME = "adb_web";
        private static $COL_ID = "id";
        private static $COL_GENERAL_INFO = "general_info";
        private static $COL_GROUP_INFO = "group_info";
        private static $COL_GROUP_A_INFO = "group_a_info";
        private static $COL_GROUP_B_INFO = "group_b_info";
        private static $COL_FOOTER = "footer";
        /* ============================== Methods ===================================================== */
        /**
         * obtain()
         * This function obtains the web stored in the adb_web
         * @author Sergio Baena Lopez
         * @version 16.0
         * @return {Web} the web stored in the adb_web
         */
        public static function obtain() {
            // open connection
            $db = new PocketScheduleDB();
            // prepare query
            $sql = "SELECT *
                    FROM " . self::$NAME . 
                  " WHERE " . self::$NAME . "." . self::$COL_ID . " = 1;";
            $stmt = $db->prepare($sql);
            // execute query
            $stmt->execute();
            // link outcome variables
            $stmt->bind_result($id, $generalInfo, $groupInfo, $groupAInfo, $groupBInfo, $footer);
            // get the value
            $stmt->fetch();
            // we create a web object which contains all these values
            $web = new Web($id, $generalInfo, $groupInfo, $groupAInfo, $groupBInfo, $footer);
            // close connection
            $db->close();
            // return the web object
            return $web;
        }
    }
    // Testeo
//    $web = WebTable::obtain();
//    echo $web->getGeneralInfo();
?>
