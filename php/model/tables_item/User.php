<?php
    abstract class User implements TableItem {
        /* ============================== Attributes ===================================================== */
        protected $id;              // int
        protected $image;           // Image
        protected $name;            // String
        protected $surnames;        // String
        protected $password;        // String
        protected $registerDate;    // DateTime
        /* ============================== Constructors ================================================== */
        public function __construct($param0 = null, $param1 = null, $param2 = null, $param3 = null) {
            $this->withoutIdNorRegisterDateConstructor($param0, $param1, $param2, $param3);
        }
        
        private function withoutIdNorRegisterDateConstructor($image, $name, $surnames, $password) {
            $this->setImage($image);
            $this->setName($name);
            $this->setSurnames($surnames);
            $this->setPassword($password);
        }
        /* ============================== Accessors ================================================== */
        public function getId() {
            return $this->id;
        }

        public function getImage() {
            return $this->image;
        }

        public function getName() {
            return $this->name;
        }

        public function getSurnames() {
            return $this->surnames;
        }

        public function getPassword() {
            return $this->password;
        }

        public function getRegisterDate() {
            return $this->registerDate;
        }

        public function setId($id) {
            $this->id = $id;
        }

        public function setImage($image) {
            $this->image = $image;
        }

        public function setName($name) {
            $this->name = $name;
        }

        public function setSurnames($surnames) {
            $this->surnames = $surnames;
        }

        public function setPassword($password) {
            $this->password = $password;
        }

        public function setRegisterDate($registerDate) {
            $this->registerDate = $registerDate;
        }
        /* =========================== Methods ================================================= */
        public function toAssociativeArray() {
             // TODO
        }
        /**
         * isValid()
         * This function indicates if the user is valid or not
         * @author Sergio Baena Lopez
         * @version 21.0
         * @return bool if the user is valid or not
         */
        public function isValid() {
            $paramsList = func_get_args();
            $numParams = func_num_args();

            switch($numParams) {
                case 0: 
                    $result = $this->doRevalidation();
                    break;
                case 1:
                    if( $paramsList[0] ) { // $isRevalidation = true
                        $result = $this->doRevalidation();
                    } else {
                        $result = $this->doValidation();
                    }
                    break;
            }

            return $result;
        }
        /**
         * doRevalidation()
         * This function does the revalidation of the user
         * @author Sergio Baena Lopez
         * @version 21.0
         * @return bool if the user is good revalidated or not
         */
        protected function doRevalidation() {
            $isValid = $this->image->isValid();
            
            if($isValid) { // If this object is valid yet, we continue the validation
                // Validation of the name 
                if( !Utilities::isValidSentence($this->name) ) {
                    $isValid = false;
                } 
                // Validation of the surnames 
                else if( !Utilities::isValidSentence($this->surnames) ) {
                    $isValid = false;
                } 
                // Validation of the password 
                else if( !Utilities::isValidPassword($this->password) ) {
                    $isValid = false;
                } 
            }

            return $isValid;
        }
        /**
         * doValidation()
         * This function does the validation of the user
         * @author Sergio Baena Lopez
         * @version 21.0
         * @return [] an associative array with this format:
         * ["isValid"] bool if the normal user is valid or not
         * ["invalidAttributesList"] {string[]} the list of the invalid attributes 
         */
        abstract protected function doValidation();
        /**
         * convert()
         * This procedure converts the user for the database
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        public function convert() {
            $this->name = Utilities::convertToProperNouns($this->name);
            $this->surnames = Utilities::convertToProperNouns($this->surnames);
        }
        /**
         * initialize()
         * This procedure initializes the user
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        public function initialize() {
            $this->image->initialize();
            $this->registerDate = new DateTime();
        }
    }
?>