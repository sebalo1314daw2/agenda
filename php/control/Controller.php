<?php
    require_once '../model/tables/WebTable.php';
    require_once '../model/tables_item/Web.php'; 
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
                        echo $this->obtainWeb();
                        break;
                }
            }
        }
        /**
         * obtainWeb()
         * This function obtains the web object stored in the database
         * @author Sergio Baena Lopez
         * @version 16.0
         * @return {String} web object (encoded to JSON)
         */
        private function obtainWeb() {
            // get the web
            $web = WebTable::obtain();
            return json_encode( $web->toAssociativeArray() );
        }
    }
?>