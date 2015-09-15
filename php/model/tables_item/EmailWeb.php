<?php
    class EmailWeb implements TableItem {
        /* ============================== Attributes ===================================================== */
         private $id;                       // int
         private $type;                     // int
         private $title;                    // string
         private $content;                  // string
         
         const VALIDATION_EMAIL = 0;
         /* ============================== Constructors ================================================== */
         public function __construct($param0 = null, $param1 = null, $param2 = null, $param3 = null) {
             if($param1 == null && $param2 == null && $param3 == null) {
                 $this->typeConstructor($param0);
             } else {
                 $this->fullConstructor($param0, $param1, $param2, $param3);
             }
         }
         
         private function fullConstructor($id, $type, $title, $content) {
             $this->id = $id;
             $this->type = $type;
             $this->title = $title;
             $this->content = $content;
         }
         
         private function typeConstructor($type) {
             $this->type = $type;
         }
         /* ============================== Accessors ===================================================== */
         public function getId() {
             return $this->id;
         }

         public function getType() {
             return $this->type;
         }

         public function getTitle() {
             return $this->title;
         }

         public function getContent() {
             return $this->content;
         }

         public function setId($id) {
             $this->id = $id;
         }

         public function setType($type) {
             $this->type = $type;
         }

         public function setTitle($title) {
             $this->title = $title;
         }

         public function setContent($content) {
             $this->content = $content;
         }
         /* =========================== Methods ================================================= */
         public function toAssociativeArray() {
            // TODO
         }
         public function __toString() {
             return "id=$this->id; type=$this->type;  title=$this->title; content=$this->content";
         }
    }
?>