function EdicioGrupsBController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "EdicioGrupsBController");
/* ============================== Attributes ===================================================== */
EdicioGrupsBController.prototype.DATA_TYPE = "EdicioGrupsBController";
EdicioGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
EdicioGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
EdicioGrupsBController.atTheStartOfPage = function() {
    EdicioGrupsBController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
EdicioGrupsBController.generateCommonContent = function() {
    Page.generateLogo (
        EdicioGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS, 
        EdicioGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}