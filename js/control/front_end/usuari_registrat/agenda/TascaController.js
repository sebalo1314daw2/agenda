function TascaController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "TascaController");
/* ============================== Attributes ===================================================== */
TascaController.prototype.DATA_TYPE = "TascaController";
TascaController.URL_WHERE_THE_LOGO_REDIRECTS = "index.html";
TascaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
TascaController.atTheStartOfPage = function() {
    TascaController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
TascaController.generateCommonContent = function() {
    Page.generateLogo (
        TascaController.URL_WHERE_THE_LOGO_REDIRECTS, 
        TascaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
    Page.activateChosen();
    Page.activateCalendar();
}