function SelectMultipleController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "SelectMultipleController");
/* ============================== Attributes ===================================================== */
SelectMultipleController.prototype.DATA_TYPE = "SelectMultipleController";
SelectMultipleController.URL_WHERE_THE_LOGO_REDIRECTS = "../usuari_registrat/agenda/";
SelectMultipleController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
SelectMultipleController.atTheStartOfPage = function() {
    SelectMultipleController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
SelectMultipleController.generateCommonContent = function() {
    Page.generateLogo (
        SelectMultipleController.URL_WHERE_THE_LOGO_REDIRECTS, 
        SelectMultipleController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}