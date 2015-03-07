<?php
    require_once '../model/tables/WebTable.php';
    require_once '../model/tables_item/Web.php'; 
    require_once '../model/tables_item/Message.php'; 
    require_once '../model/tables/MessageTable.php'; 
    class Controller {
        /* ============================== Attributes ===================================================== */
        private $params; // parameters sent from the client (associative array)
        /* ============================== Constructor ==================================================== */
        /**
         * __construct()
         * Constructor that introduces the parameters sent from the client in the "$params" attribute.
         * @author Sergio Baena Lopez
         * @version 16.0
         * @param {array} $params Associative array which contains the parameters sent from the client.
         */
        public function __construct($params) {
            $this->params = $params;
        }
        /* ====================== Non-static methods ==================================================== */
        /**
         * doAction()
         * This procedure executes the action which you specified in the action parameter
         * @author Sergio Baena Lopez
         * @version 16.0
         */
        public function doAction() {
            if( isset( $this->params["action"] ) ) { // the action param is set
                switch( $this->params["action"] ) {
                    case "0":
                        echo self::obtainWeb();
                        break;
                    case "1":
                        echo self::addNewMsg($this->params["msg"]);
                        break;
                }
            }
        }
        /* ====================== Static methods ==================================================== */
        /**
         * obtainWeb()
         * This function obtains the web object stored in the database
         * @author Sergio Baena Lopez
         * @version 16.0
         * @return {String} web object (encoded to JSON)
         */
        private static function obtainWeb() {
            // get the web
            $web = WebTable::obtain();
            return json_encode( $web->toAssociativeArray() );
        }
        /**
         * addNewMsg()
         * This function adds the specified message in the database
         * @author Sergio Baena Lopez
         * @version 19.0
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
            
            return json_encode($wasStored);
        }
    }
?>