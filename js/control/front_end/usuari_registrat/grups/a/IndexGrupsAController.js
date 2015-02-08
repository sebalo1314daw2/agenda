function IndexGrupsAController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "IndexGrupsAController");
/* ============================== Attributes ===================================================== */
IndexGrupsAController.prototype.DATA_TYPE = "IndexGrupsAController";
IndexGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
IndexGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
IndexGrupsAController.atTheStartOfPage = function() {
    IndexGrupsAController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
IndexGrupsAController.generateCommonContent = function() {
    Page.generateLogo (
        IndexGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS, 
        IndexGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}
