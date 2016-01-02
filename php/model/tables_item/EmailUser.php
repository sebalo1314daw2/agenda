<?php
    require_once '../model/tables/EmailUserTable.php';
    class EmailUser implements TableItem {
        /* ============================== Attributes ===================================================== */
        private $id;                    // int
        private $user;                  // User
        private $value;                 // String
        private $isValid;               // bool
        private $deadlineValidation;    // DateTime
        private $alphaNumValidation;    // String
        
        const MAX_LENGTH_OF_VALUE = 320;// int
        /* ============================== Constructors ================================================== */
        public function __construct($param0, $param1) {
            $this->userAndValueConstructor($param0, $param1);
        }
        
        private function userAndValueConstructor($user, $value) {
            $this->setUser($user);
            $this->setValue($value);
        }
        
        /* ============================== Accessors ================================================== */
        public function getId() {
            return $this->id;
        }

        public function getUser() {
            return $this->user;
        }

        public function getValue() {
            return $this->value;
        }

        public function getIsValid() {
            return $this->isValid;
        }

        public function getDeadlineValidation() {
            return $this->deadlineValidation;
        }

        public function getAlphaNumValidation() {
            return $this->alphaNumValidation;
        }

        public function setId($id) {
            $this->id = $id;
        }

        public function setUser($user) {
            $this->user = $user;
        }

        public function setValue($value) {
            $this->value = $value;
        }

        public function setIsValid($isValid) {
            $this->isValid = $isValid;
        }

        public function setDeadlineValidation($deadlineValidation) {
            $this->deadlineValidation = $deadlineValidation;
        }

        public function setAlphaNumValidation($alphaNumValidation) {
            $this->alphaNumValidation = $alphaNumValidation;
        }
        /* =========================== Methods ================================================= */
        public function toAssociativeArray() {
            // TODO
        }
        /**
         * isValid()
         * This function indicates if the email user is valid or not
         * @author Sergio Baena Lopez
         * @version 21.0
         * @return bool if the email user is valid or not
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
         * doValidation()
         * This function does the validation of the email user
         * @author Sergio Baena Lopez
         * @version 21.0
         * @return [] an associative array with this format:
         * ["isValid"] bool if the email user is valid or not
         * ["invalidAttributesList"] {string[]} the list of the invalid attributes 
         */
        private function doValidation() {
            $validationData = $this->user->isValid(false);
            
            // Validation of the value (uniqueness)
            if( EmailUserTable::exists($this) ) { // value is invalid
                $validationData["isValid"] = false;
                $validationData["invalidAttributesList"][] = "value-uniqueness";
            } 
            
            return $validationData;
        }
        /**
         * doRevalidation()
         * This function does the revalidation of the email user
         * @author Sergio Baena Lopez
         * @version 22.1
         * @return bool if the email user is good revalidated or not
         */
        private function doRevalidation() {
            $isValid = $this->user->isValid();
            
            if($isValid) { // If this object is valid yet, we continue the validation
                // Validation of the value (format) 
                if( ! (
                        Utilities::isValidEmail($this->value) && 
                        Utilities::hasRightLength($this->value, self::MAX_LENGTH_OF_VALUE)
                    )
                ) {
                    $isValid = false;
                } 
            }

            return $isValid;
        }
        /**
         * convert()
         * This procedure converts the email user for the database
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        public function convert() {
            $this->user->convert();
        }
        /**
         * initialize()
         * This procedure initializes the email user
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        public function initialize() {
            $this->user->initialize();
            $this->isValid = false;
            
            $deadlineValidation = new DateTime();
            $deadlineValidation->add( new DateInterval(Constants::PERIOD_VALIDATION) );
            $this->deadlineValidation = $deadlineValidation;
            
            $this->createAlphaNumber();
        }
        /**
         * createAlphaNumber()
         * This procedure creates the alpha number
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        private function createAlphaNumber() {
            $alphaNumberChars = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
            
            $alphaNumber = "";
            for($i = 0; $i < 60; $i++) {
                $randomIndex =  rand(0, 61);
                $alphaNumber .= substr($alphaNumberChars, $randomIndex, 1);
            }
            
            $this->alphaNumValidation =  $alphaNumber;
        }
        /**
         * sendMsg()
         * This procedure sends the specified message to this email
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param EmailWeb $emailWeb the email web to send
         * @param string $msg the message to send 
         */
        public function sendMsg($emailWeb, $msg) {
            $recipientEmail = $this->value;
            $issue = html_entity_decode( $emailWeb->getTitle() );
            $headers = "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=utf8\r\n";
            
            mail($recipientEmail, $issue, $msg, $headers);
        }
    }
?>