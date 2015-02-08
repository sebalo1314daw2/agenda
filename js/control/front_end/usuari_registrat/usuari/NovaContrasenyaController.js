function NovaContrasenyaController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "NovaContrasenyaController");
/* ============================== Attributes ===================================================== */
NovaContrasenyaController.prototype.DATA_TYPE = "NovaContrasenyaController";
NovaContrasenyaController.URL_WHERE_THE_LOGO_REDIRECTS = "../agenda/";
NovaContrasenyaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
NovaContrasenyaController.atTheStartOfPage = function() {
    NovaContrasenyaController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
NovaContrasenyaController.generateCommonContent = function() {
    Page.generateLogo (
        NovaContrasenyaController.URL_WHERE_THE_LOGO_REDIRECTS, 
        NovaContrasenyaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}