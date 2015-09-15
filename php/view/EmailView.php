<?php
    class EmailView {
        /* ============================== Attributes ===================================================== */
        const PATH = "../../html/email/template.html";
        
        const PARAGRAPH_START_TAG = "<parragraf>";
        const PARAGRAPH_END_TAG = "</parragraf>";
        const BOLD_START_TAG = "<negreta>";
        const BOLD_END_TAG = "</negreta>";
        const PARAGRAPH_START_HTML_TAG = "<p>";
        const PARAGRAPH_END_HTML_TAG = "</p>";
        const BOLD_START_HTML_TAG = "<b>";
        const BOLD_END_HTML_TAG = "</b>";
        
        const TITLE_TAG = "%TITLE%";
        const CONTENT_TAG = "%CONTENT%";
        const USER_NAME_TAG = "%USER_NAME%";
        const ALPHA_NUMBER_TAG = "%ALPHA_NUMBER%";
        
        private $value;             // string
        /* ============================== Constructors ================================================== */
        public function __construct($param0) {
            $this->emailWebConstructor($param0);
        }
        
        private function emailWebConstructor($emailWeb) {
            $this->value = file_get_contents(self::PATH);
            $this->fill($emailWeb);
            $this->toHTMLTags();
        }
        /* =========================== Accessors ================================================= */
        public function getValue() {
            return $this->value;
        }
        /* =========================== Methods ================================================= */
        /**
         * fill()
         * This procedure fills the email view with the specified data
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param TableItem $tableItem the table's item whose data we fill with
         */
        public function fill($tableItem) {
            if($tableItem instanceof EmailWeb) {
                $this->fillFromEmailWeb($tableItem);
            } else if($tableItem instanceof User) {
                $this->fillFromUser($tableItem);
            } else if($tableItem instanceof EmailUser) {
                $this->fillFromEmailUser($tableItem);
            }  
        }
        /**
         * fillFromEmailWeb()
         * This procedure fills  the email view from the specified email web
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param EmailWeb $emailWeb the email web whose data we fill with
         */
        private function fillFromEmailWeb($emailWeb) {
            $this->value = str_replace(self::TITLE_TAG, $emailWeb->getTitle(),  $this->value);
            $this->value = str_replace(self::CONTENT_TAG, $emailWeb->getContent(),  $this->value);
        }
        /**
         * fillFromUser()
         * This procedure fills  the email view from the specified user
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param User $user the user whose data we fill with
         */
        private function fillFromUser($user) {
            $this->value = str_replace(self::USER_NAME_TAG, $user->getName(),  $this->value);
        }
        /**
         * fillFromEmailUser()
         * This procedure fills  the email view from the specified email user
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param EmailUser $emailUser the email user whose data we fill with
         */
        private function fillFromEmailUser($emailUser) {
            $this->value = str_replace(self::ALPHA_NUMBER_TAG, $emailUser->getAlphaNumValidation(),  $this->value);
        }
        /**
         * toHTMLTags()
         * This procedure converts everything to HTML tags
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        private function toHTMLTags() {
            $this->value = str_replace (
                self::PARAGRAPH_START_TAG, self::PARAGRAPH_START_HTML_TAG,  $this->value
            );
            $this->value = str_replace (
                self::PARAGRAPH_END_TAG, self::PARAGRAPH_END_HTML_TAG,  $this->value
            );
            
            $this->value = str_replace (
                self::BOLD_START_TAG, self::BOLD_START_HTML_TAG,  $this->value
            );
            $this->value = str_replace (
                self::BOLD_END_TAG, self::BOLD_END_HTML_TAG,  $this->value
            );
        }
     }
?>