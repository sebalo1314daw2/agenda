function GrupAController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "GrupAController");
/* ============================== Attributes ===================================================== */
GrupAController.prototype.DATA_TYPE = "GrupAController";
GrupAController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
GrupAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
GrupAController.atTheStartOfPage = function() {
    GrupAController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
GrupAController.generateCommonContent = function() {
    Page.generateLogo (
        GrupAController.URL_WHERE_THE_LOGO_REDIRECTS, 
        GrupAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
    Page.activateChosen();
}