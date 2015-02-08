function GrupBController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "GrupBController");
/* ============================== Attributes ===================================================== */
GrupBController.prototype.DATA_TYPE = "GrupBController";
GrupBController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
GrupBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
GrupBController.atTheStartOfPage = function() {
    GrupBController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
GrupBController.generateCommonContent = function() {
    Page.generateLogo (
        GrupBController.URL_WHERE_THE_LOGO_REDIRECTS, 
        GrupBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
    Page.activateChosen();
}