<?php
    require_once '../model/tables/WebTable.php';
    require_once '../model/tables_item/Web.php'; 
    require_once '../model/tables_item/Message.php'; 
    require_once '../model/tables_item/Image.php'; 
    require_once '../model/tables_item/User.php'; 
    require_once '../model/tables_item/NormalUser.php'; 
    require_once '../model/tables_item/EmailUser.php';
    require_once '../model/tables_item/EmailWeb.php';
    require_once '../model/tables/MessageTable.php'; 
    require_once '../model/tables/UserTable.php'; 
    require_once '../model/tables/NormalUserTable.php';
    require_once '../model/tables/EmailWebTable.php';
    require_once '../model/other_classes/Utilities.php';
    require_once '../model/other_classes/ImageFile.php';
    require_once '../model/other_classes/Session.php';
    require_once '../view/EmailView.php';
    class Controller {
        /* ============================== Attributes ===================================================== */
        private $params; // parameters sent from the client (associative array)
        /* ============================== Constructor ==================================================== */
        /**
         * __construct()
         * Constructor that introduces the parameters sent from the client in the "$params" attribute.
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param {[]} $request Associative array which contains the request sent from the client.
         * @param {[]} $files Associative array which contains the files sent from the client.
         */
        public function __construct($request, $files) {
            $this->params = $request;
            if( count($files) != 0 ) { // the client sent files
                foreach($files as $key => $value) {
                    $this->params[$key] = $value;
                }
            }
        }
        /* ====================== Non-static methods ==================================================== */
        /**
         * doAction()
         * This procedure executes the action which you specified in the action parameter
         * @author Sergio Baena Lopez
         * @version 21.0
         */
        public function doAction() {
            Utilities::determinateUTF8Codification();
            Session::enable();
            
            if( isset( $this->params["action"] ) ) { // the action param is set
                switch( $this->params["action"] ) {
                    case "0":
                        echo self::obtainWeb();
                        break;
                    case "1":
                        echo self::addNewMsg($this->params["msg"]);
                        break;
                    case "2":
                        echo self::addNewNormalUser (
                            $this->params["sourceImage"],
                            $this->params["nameNormalUser"],
                            $this->params["surnamesNormalUser"],
                            $this->params["passwordNormalUser"],
                            $this->params["aliasNormalUser"],
                            $this->params["valueEmailUser"]
                        );
                        break;
                }
            }
        }
        /* ====================== Static methods ==================================================== */
        /**
         * obtainWeb()
         * This function obtains the web object stored in the database
         * @author Sergio Baena Lopez
         * @version 20.2
         * @return {String} web object (encoded to JSON)
         */
        private static function obtainWeb() {
            // get the web
            $web = WebTable::obtain();
            return Utilities::toJSON($web);
        }
        /**
         * addNewMsg()
         * This function adds the specified message in the database
         * @author Sergio Baena Lopez
         * @version 20.2
         * @param String $msgJSONEncode the message to add (JSON format)
         * @return String a boolean which indicates if the specified message was stored or not 
         * (encoded to JSON)
         */
        private static function addNewMsg($msgJSONEncode) {
            $wasStored = false;
            $msg = Message::obtainFromJSON($msgJSONEncode);
            
            if( $msg->isValid() ) { // the message is valid --> we do the conversion and the insertion
                $msg->convert();
                MessageTable::insert($msg);
                $wasStored = true;
            }
            
            return Utilities::toJSON($wasStored);
        }
        /**
         * addNewNormalUser()
         * This function adds the specified normal user to the database
         * @author Sergio Baena Lopez
         * @version 21.0
         * @param String $sourceImage the image's source
         * @param String $name the normal user's name
         * @param String $surnames the normal user's surnames
         * @param String $password the normal user's password
         * @param String $alias the normal user's alias
         * @param String $email the email user's value
         * @return String an associative array with this format (encoded to JSON):
         * ["isHackerAttack"] bool if the user tried to hack the web
         * ["validationData"] an associative array with this format:
         *      ["isValid"] bool if the email user is valid or not
         *      ["invalidAttributesList"] {String[]} the list of the invalid attributes 
         */
        private static function addNewNormalUser($sourceImage, $name, $surnames, $password, $alias, $email) {
            // Fistly, we create the objects
            $image = new Image($sourceImage);
            $normalUser = new NormalUser($image, $name, $surnames, $password, $alias);
            $emailUser = new EmailUser($normalUser, $email);
            // Then, we revalidate the email user
            $isHackerAttack = !$emailUser->isValid();
            $validationData = null;
            if(!$isHackerAttack) { // If it isn't a hacker attack, we continue validating
                // We convert the emailUser for the validation and the insertion
                $emailUser->convert();
                // Now, we validate the emailUser
                $validationData = $emailUser->isValid(false);
                if( $validationData["isValid"] ) { // Successful validation --> we continue
                    // Following we initialize the email user 
                    $emailUser->initialize();
                    // After that, we insert the email user
                    EmailUserTable::insert($emailUser);
                    // Now, we store the image to the server
                    ImageFile::add( $emailUser->getUser() );
                    // Then, we send the validation email
                    $emailWeb = EmailWebTable::findByType( new EmailWeb(EmailWeb::VALIDATION_EMAIL) );
                    
                    $emailView = new EmailView($emailWeb);
                    $emailView->fill( $emailUser->getUser() );
                    $emailView->fill($emailUser);
                    
//                    $emailUser->sendMsg( $emailWeb, $emailView->getValue() );
                    // Finally, we logs in
                    Session::logIn($emailUser);
                }
            }
            // We create the array to return 
            $dataToReturn = array (
                "isHackerAttack" => $isHackerAttack, "validationData" => $validationData
            );
            // Lastly, we return it
            return Utilities::toJSON($dataToReturn);
        }
    }
?>