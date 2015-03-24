function SobreLaWebController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "SobreLaWebController");
/* ============================== Attributes ===================================================== */
SobreLaWebController.prototype.DATA_TYPE = "SobreLaWebController";
SobreLaWebController.URL_WHERE_THE_LOGO_REDIRECTS = "login.html";
SobreLaWebController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
SobreLaWebController.URL_SERVER = "../../../php/control/call_controller.php";
/* ============================== Static methods ================================================= */
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 20.6
 */
SobreLaWebController.generateCommonContent = function() {
    this.generateCommonContentForNotRegisteredUsers();
}
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 19.0
 */
SobreLaWebController.atTheStartOfPage = function() {
    var e;
    try {
       SobreLaWebController.generateCommonContent();
       SobreLaWebController.generateDynamicContent();
       Page.addResizeEvent(SobreLaWebController.centerPositionedElements);
    } catch(e) {
        if(e.getDATA_TYPE == undefined) {  // thrown  excepcion --> System exception
            Page.showErrorForDeveloper(e);
        } else if(e.getDATA_TYPE() == "AjaxException") { // thrown  excepcion --> AjaxException
            Page.alert( new Array(e) );
        } else if(e.getDATA_TYPE() == "UnsupportedLocalStorageException") { // thrown  excepcion --> UnsupportedLocalStorageException
            // We don't do anything
        } else { // thrown exception --> a Exception object not expected 
            Page.showErrorForDeveloper(e);
        }
    }
}
/**
 * generateWeb()
 * @description This procedure generates the web
 * @author Sergio Baena Lopez
 * @version 20.6
 * @param {Web} web the necessary information to generate the web
 */
SobreLaWebController.generateWeb = function(web) {
    Page.generateText( web.getGeneralInfo() ); 
}