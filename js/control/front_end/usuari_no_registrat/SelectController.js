function SelectController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "SelectController");
/* ============================== Attributes ===================================================== */
SelectController.prototype.DATA_TYPE = "SelectController";
SelectController.URL_WHERE_THE_LOGO_REDIRECTS = "../usuari_registrat/agenda/";
SelectController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
SelectController.atTheStartOfPage = function() {
    SelectController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
SelectController.generateCommonContent = function() {
    Page.generateLogo (
        SelectController.URL_WHERE_THE_LOGO_REDIRECTS, 
        SelectController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}