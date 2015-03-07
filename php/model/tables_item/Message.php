<?php
    require_once 'TableItem.php';
    require_once '../model/other_classes/Utilities.php';
    class Message implements TableItem {
       /* ============================== Attributes ===================================================== */
       private $id;             // Integer
       private $issue;          // String
       private $message;        // String
       private $email;          // String
       /* ============================== Constructor =================================================== */
       public function __construct($param0 = null, $param1 = null, $param2 = null) {
           $this->withoutIdConstructor($param0, $param1, $param2); 
       }
       
       private function withoutIdConstructor($issue, $message, $email) {
           $this->issue = $issue;
           $this->message = $message;
           $this->email = $email;
       }
       /* ============================== Accessors ==================================================== */
       public function getId() {
           return $this->id;
       }

       public function getIssue() {
           return $this->issue;
       }

       public function getMessage() {
           return $this->message;
       }

       public function getEmail() {
           return $this->email;
       }

       public function setId($id) {
           $this->id = $id;
       }

       public function setIssue($issue) {
           $this->issue = $issue;
       }

       public function setMessage($message) {
           $this->message = $message;
       }

       public function setEmail($email) {
           $this->email = $email;
       }
       /* ============================== Methods ===================================================== */
       /**
         * toAssociativeArray()
         * This function converts the message to an associtive array whose keys are going to be it 
         * attribute's names.
         * @author Sergio Baena Lopez
         * @version 19.0
         * @return [] an associtive array which represents the message
         */
        public function toAssociativeArray() {
            // TODO
        }
        /**
         * obtainFromJSON()
         * This function obtains the message from the specified JSON
         * @author Sergio Baena Lopez
         * @version 19.0
         * @param String $json The representation of this object in JSON 
         * @return Message the message from the specified JSON
         */
        public static function obtainFromJSON($json) {
             $msgJSONDecode = json_decode( stripslashes($json) );
             
             $issue = $msgJSONDecode->issue;
             $message = $msgJSONDecode->message;
             $email = $msgJSONDecode->email;
             
             return new Message($issue, $message, $email);   
        }
        /**
         * isValid()
         * This function indicates if the message is valid or not
         * @author Sergio Baena Lopez
         * @version 19.0
         * @return bool if the message is valid or not
         */
        public function isValid() {
            return Utilities::isValidText($this->issue)     &&
                   Utilities::isValidText($this->message)   &&
                   Utilities::isValidEmail($this->email);
        }
        /**
         * convert()
         * This procedure converts the message for the database
         * @author Sergio Baena Lopez
         * @version 19.0
         */
        public function convert() {
            $this->issue = Utilities::convertText($this->issue);
            $this->message = Utilities::convertText($this->message);
        }
    }
?>