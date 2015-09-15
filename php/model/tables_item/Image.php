<?php
    class Image implements TableItem {
        /* ============================== Attributes ===================================================== */
        private $id;                        // int
        private $extension;                 // String
        private $isValid;                   // int
        private $deadlineValidation;        // DateTime
        private $source;                    // File ($_FILES)
        
        const NULL = -1; 
        const FALSE = 0;
        const TRUE = 1;
        /* ============================== Constructors ================================================== */
        public function __construct($param0) {
            $this->sourceConstructor($param0);
        }
        
        private function sourceConstructor($source) {
            $this->setSource($source);
        }
        /* ============================== Accessors ===================================================== */
        public function getId() {
            return $this->id;
        }

        public function getExtension() {
            return $this->extension;
        }

        public function getIsValid() {
            return $this->isValid;
        }

        public function getDeadlineValidation() {
            return $this->deadlineValidation;
        }

        public function getSource() {
            return $this->source;
        }

        public function setId($id) {
            $this->id = $id;
        }

        public function setExtension($extension) {
            $this->extension = $extension;
        }

        public function setIsValid($isValid) {
            $this->isValid = $isValid;
        }

        public function setDeadlineValidation($deadlineValidation) {
            $this->deadlineValidation = $deadlineValidation;
        }

        public function setSource($source) {
            $this->source = $source;
        }
        /* =========================== Methods ================================================= */
        public function toAssociativeArray() {
            // TODO
        }
        /**
         * isValid()
         * This function indicates if the image is valid or not
         * @author Sergio Baena Lopez
         * @version 21.0
         * @return bool if the image is valid or not
         */
        public function isValid() {
            $isValid = true;
            // Validation of the source (wasSent)
            if( !Utilities::wasFileSent($this->source) ) {
                $isValid = false;
            }
            // Validation of the source (type)
            else if( !Utilities::isValidTypeImage( $this->source["type"] ) ) {
                $isValid = false;
            }
            // Validation of the source (width)
            else if( !Utilities::isValidWidthImage( $this->source["tmp_name"] ) ) {
                $isValid = false;
            }
            // Validation of the source (size) 
            else if( !Utilities::isValidSizeImage( $this->source["size"] ) ) {
                $isValid = false;
            }
            return $isValid;
        }
        /**
         * initialize()
         * This procedure initializes the image
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        public function initialize() {
            $this->extension = Utilities::obtainExtensionFromMimeType( $this->source["type"] );
            $this->isValid = self::NULL;
            
            $deadlineValidation = new DateTime();
            $deadlineValidation->add( new DateInterval(Constants::PERIOD_VALIDATION) );
            $this->deadlineValidation = $deadlineValidation;
            
//            http://ivan.rico.org.mx/?p=1105
        }
    }
?>