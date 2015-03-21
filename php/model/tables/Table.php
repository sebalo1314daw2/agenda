<?php
    require_once '../model/other_classes/Constants.php';
    abstract class Table implements Constants {
        /* ============================== Attributes (Constants) ========================================== */
        const NAME = null;
        /* ============================== Abstract methods ================================================ */
        /**
         * insert()
         * This procedure inserts the specified table item to this table
         * @author Sergio Baena Lopez
         * @version 20.4
         * @param TableItem $tableItem the table item to insert
         */
        abstract public static function insert($tableItem);
    }   
?>