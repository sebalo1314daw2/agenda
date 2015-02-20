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
 * @version 17
 */
SobreLaWebController.generateCommonContent = function() {
    Page.generateLogo (
        SobreLaWebController.URL_WHERE_THE_LOGO_REDIRECTS, 
        SobreLaWebController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateMenu();
}
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 18.1
 */
SobreLaWebController.atTheStartOfPage = function() {
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
 * generateDynamicContent()
 * This procedure generates the dynamic content of the page
 * @author Sergio Baena Lopez
 * @version 18.0
 * @throws {AjaxException} if Ajax causes an error 
 * @throws {UnsupportedLocalStorageException} if the local storage isn't sopported for browser
 */
SobreLaWebController.generateDynamicContent = function() {
    var web = Web.obtain (
        SobreLaWebController.URL_SERVER, 
        Page.activateLoadAnimation, 
        Page.deactivateLoadAnimation,
        Page.getAJAX_ERR()
    );
    web.toHTMLTags ( 
        Page.getBOLD_TAG("start"),
        Page.getBOLD_TAG("end"),
        Page.getPARAGRAPH_TAG("start"),
        Page.getPARAGRAPH_TAG("end")
    ); 
    Page.generateText( web.getGeneralInfo() ); 
    Page.generateFooter( web.getFooter() );
    web.storeIfItIsRequired();
}