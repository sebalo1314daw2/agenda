<?php
    class ImageFile {
        /* ============================== Attributes ===================================================== */
        const USER_DIRECTORY_PATH = "../../img/profiles/users/";
        const A_GROUP_DIRECTORY_PATH = "../../img/profiles/groups/a/";
        const B_GROUP_DIRECTORY_PATH = "../../img/profiles/groups/b/";
        /* =========================== Methods ================================================= */
        /**
         * add()
         * This procedure adds the specified image to its directory
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param User|Group $userOrGroup the user or group who contains the image to add
         */
        public static function add($userOrGroup) {
            if($userOrGroup instanceof User) {
                self::addUser($userOrGroup);
            }
        }
        /**
         * addUser()
         * This procedure adds the imagen of the specified user to the server
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param User $user the user who contains the image to add
         */
        private static function addUser($user) {
            $image = $user->getImage();
            $sourceImage = $image->getSource();
            
            $origin = $sourceImage["tmp_name"];
            $destination = self::USER_DIRECTORY_PATH . $image->getId() . "." . $image->getExtension();
            
            move_uploaded_file($origin, $destination);
        }
    }
?>