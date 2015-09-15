<?php
    class Session {
        /* ======================================== attributes ===================================== */
        const NAME = "emailAuthenticatedUser";
        /* ======================================== Static methods ===================================== */
        /**
         * enable()
         * This procedure enables the session
         * @author Sergio Baena Lopez
         * @version 21.0 
         */
        public static function enable() {
            session_start();
        }
        /**
         * logIn()
         * This procedure logs in.
         * @author Sergio Baena Lopez
         * @version 21.0 
         * @param EmailUser $emailUser the email of the user who logs in
         */
        public static function logIn($emailUser) {
            $_SESSION[self::NAME] = $emailUser;
        }
        /**
         * isLogIn()
         * This function indicates if the user logs in or not
         * @author Sergio Baena Lopez
         * @version 21.0 
         * @return bool if the user logs in or not
         */
        public static function isLogIn() {
            return isset( $_SESSION[self::NAME] );
        }
        /**
         * logOut()
         * This procedure logs out.
         * @author Sergio Baena Lopez
         * @version 21.0 
         */
        public static function logOut() {
            session_destroy();
        }
        /**
         * obtainEmailActiveUser()
         * This function obtains the email of the active user who is contained in the session
         * @author Sergio Baena Lopez
         * @version 21.0 
         * @return EmailUser the email of the active user who is contained in the session
         */
        public static function obtainEmailActiveUser() {
            return $_SESSION[self::NAME];
        }
    }
?>