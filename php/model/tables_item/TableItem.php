<?php
    interface TableItem {
        /* ====================== Non-static methods ==================================================== */
        /**
         * toAssociativeArray()
         * This function converts the object to an associtive array whose keys are going to be the 
         * attribute's names.
         * @author Sergio Baena Lopez
         * @version 16.0
         * @return {array} an associtive array which represents the object
         */
        public function toAssociativeArray();
    }
?>