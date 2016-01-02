<?php
    class NormalUser extends User {
        /* ============================== Attributes ===================================================== */
        private $alias;     // String
        
        const MAX_LENGTH_OF_ALIAS = 40;     // int
        /* ============================== Constructors ================================================== */
        public function __construct (
            $param0 = null,
            $param1 = null, 
            $param2 = null, 
            $param3 = null,
            $param4 = null
        ) {
            $this->withoutIdNorRegisterDateConstructor($param0, $param1, $param2, $param3, $param4);
        }
        
        private function withoutIdNorRegisterDateConstructor($image, $name, $surnames, $password, $alias) {
            parent::__construct($image, $name, $surnames, $password);
            $this->setAlias($alias);
        }
        /* ============================== Accessors ================================================== */
        public function getAlias() {
            return $this->alias;
        }

        public function setAlias($alias) {
            $this->alias = $alias;
        }
        /* =========================== Methods ================================================= */
        public function toAssociativeArray() {
             // TODO
        }
        /**
         * doValidation()
         * This function does the validation of the normal user
         * @author Sergio Baena Lopez
         * @version 21.0
         * @return [] an associative array with this format:
         * ["isValid"] bool if the normal user is valid or not
         * ["invalidAttributesList"] {string[]} the list of the invalid attributes 
         */
        protected function doValidation() {
            $validationData = array( "isValid" => true, "invalidAttributesList" => array() );
            
            // Validation of the alias (uniqueness)
            if( NormalUserTable::exists($this) ) { // alias is invalid
                $validationData["isValid"] = false;
                $validationData["invalidAttributesList"][] = "alias-uniqueness";
            } 
            
            return $validationData;
        }
        /**
         * doRevalidation()
         * This function does the revalidation of the normal user
         * @author Sergio Baena Lopez
         * @version 22.1
         * @return bool if the normal user is good revalidated or not
         */
        protected function doRevalidation() {
            $isValid = parent::doRevalidation();
            
            if($isValid) { // If this object is valid yet, we continue the validation
                // Validation of the alias (format)
                if (
                        ! (
                                Utilities::isValidAlias($this->alias) &&
                                Utilities::hasRightLength($this->alias, self::MAX_LENGTH_OF_ALIAS)
                        )
                ) {
                    $isValid = false;
                } 
            }

            return $isValid;
        }
        /**
         * convert()
         * This procedure converts the normal user for the database
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        public function convert() {
            parent::convert();
            
            $this->alias = Utilities::convertText($this->alias);
        }
    }
?>