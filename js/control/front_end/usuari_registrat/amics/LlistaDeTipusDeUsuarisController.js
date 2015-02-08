function LlistaDeTipusDeUsuarisController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "LlistaDeTipusDeUsuarisController");
/* ============================== Attributes ===================================================== */
LlistaDeTipusDeUsuarisController.prototype.DATA_TYPE = "LlistaDeTipusDeUsuarisController";
LlistaDeTipusDeUsuarisController.URL_WHERE_THE_LOGO_REDIRECTS = "../agenda/";
LlistaDeTipusDeUsuarisController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
LlistaDeTipusDeUsuarisController.atTheStartOfPage = function() {
    LlistaDeTipusDeUsuarisController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
LlistaDeTipusDeUsuarisController.generateCommonContent = function() {
    Page.generateLogo (
        LlistaDeTipusDeUsuarisController.URL_WHERE_THE_LOGO_REDIRECTS, 
        LlistaDeTipusDeUsuarisController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}