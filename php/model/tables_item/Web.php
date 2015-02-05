<?php
    require_once 'TableItem.php';
    class Web implements TableItem {
        /* ============================== Attributes ===================================================== */
        private $id;                        // Integer
        private $generalInfo;               // String
        private $groupInfo;                 // String
        private $groupAInfo;                // String
        private $groupBInfo;                // String
        private $footer;                    // String
        /* ============================== Constructor =================================================== */
        function __construct($id, $generalInfo, $groupInfo, $groupAInfo, $groupBInfo, $footer) {
            $this->id = $id;
            $this->generalInfo = $generalInfo;
            $this->groupInfo = $groupInfo;
            $this->groupAInfo = $groupAInfo;
            $this->groupBInfo = $groupBInfo;
            $this->footer = $footer;
        }
        /* ============================== Accessors ==================================================== */
        public function getId() {
            return $this->id;
        }

        public function getGeneralInfo() {
            return $this->generalInfo;
        }

        public function getGroupInfo() {
            return $this->groupInfo;
        }

        public function getGroupAInfo() {
            return $this->groupAInfo;
        }

        public function getGroupBInfo() {
            return $this->groupBInfo;
        }

        public function getFooter() {
            return $this->footer;
        }

        public function setId($id) {
            $this->id = $id;
        }

        public function setGeneralInfo($generalInfo) {
            $this->generalInfo = $generalInfo;
        }

        public function setGroupInfo($groupInfo) {
            $this->groupInfo = $groupInfo;
        }

        public function setGroupAInfo($groupAInfo) {
            $this->groupAInfo = $groupAInfo;
        }

        public function setGroupBInfo($groupBInfo) {
            $this->groupBInfo = $groupBInfo;
        }

        public function setFooter($footer) {
            $this->footer = $footer;
        }
        /**
         * toAssociativeArray()
         * This function converts the web to an associtive array whose keys are going to be it 
         * attribute's names.
         * @author Sergio Baena Lopez
         * @version 16.0
         * @return {array} an associtive array which represents the web
         */
        public function toAssociativeArray() {
            $namesAttr = array (
                "id", 
                "generalInfo", 
                "groupInfo", 
                "groupAInfo",
                "groupBInfo",
                "footer"
            );
            $theAssociativeArray = array();
            for($i = 0; $i < count($namesAttr); $i++)
            {
                eval('$theAssociativeArray["' . $namesAttr[$i] . '"] = $this->' . $namesAttr[$i] . ';');
            }
            return $theAssociativeArray;
        }
    }
?>