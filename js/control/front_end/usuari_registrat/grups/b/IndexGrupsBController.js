function IndexGrupsBController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "IndexGrupsBController");
/* ============================== Attributes ===================================================== */
IndexGrupsBController.prototype.DATA_TYPE = "IndexGrupsBController";
IndexGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
IndexGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
IndexGrupsBController.atTheStartOfPage = function() {
    IndexGrupsBController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
IndexGrupsBController.generateCommonContent = function() {
    Page.generateLogo (
        IndexGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS, 
        IndexGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}
