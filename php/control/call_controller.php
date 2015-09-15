<?php
    require_once "Controller.php"; // controller class
    $controller = new Controller($_REQUEST, $_FILES);
    $controller->doAction();
?>  