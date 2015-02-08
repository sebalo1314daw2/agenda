function LlistaDeTipusDeGrupsController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "LlistaDeTipusDeGrupsController");
/* ============================== Attributes ===================================================== */
LlistaDeTipusDeGrupsController.prototype.DATA_TYPE = "LlistaDeTipusDeGrupsController";
LlistaDeTipusDeGrupsController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
LlistaDeTipusDeGrupsController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
LlistaDeTipusDeGrupsController.atTheStartOfPage = function() {
    LlistaDeTipusDeGrupsController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
LlistaDeTipusDeGrupsController.generateCommonContent = function() {
     Page.generateLogo (
        LlistaDeTipusDeGrupsController.URL_WHERE_THE_LOGO_REDIRECTS, 
        LlistaDeTipusDeGrupsController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}
