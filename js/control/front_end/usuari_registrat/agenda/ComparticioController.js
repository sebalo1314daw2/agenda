function ComparticioController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "ComparticioController");
/* ============================== Attributes ===================================================== */
ComparticioController.prototype.DATA_TYPE = "ComparticioController";
ComparticioController.URL_WHERE_THE_LOGO_REDIRECTS = "index.html";
ComparticioController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
ComparticioController.atTheStartOfPage = function() {
    ComparticioController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
ComparticioController.generateCommonContent = function() {
    Page.generateLogo (
        ComparticioController.URL_WHERE_THE_LOGO_REDIRECTS, 
        ComparticioController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}