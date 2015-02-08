function LlistaDeTipusDeUsuarisGrupsBController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "LlistaDeTipusDeUsuarisGrupsBController");
/* ============================== Attributes ===================================================== */
LlistaDeTipusDeUsuarisGrupsBController.prototype.DATA_TYPE = "LlistaDeTipusDeUsuarisGrupsBController";
LlistaDeTipusDeUsuarisGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
LlistaDeTipusDeUsuarisGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
LlistaDeTipusDeUsuarisGrupsBController.atTheStartOfPage = function() {
    LlistaDeTipusDeUsuarisGrupsBController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
LlistaDeTipusDeUsuarisGrupsBController.generateCommonContent = function() {
    Page.generateLogo (
        LlistaDeTipusDeUsuarisGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS, 
        LlistaDeTipusDeUsuarisGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}