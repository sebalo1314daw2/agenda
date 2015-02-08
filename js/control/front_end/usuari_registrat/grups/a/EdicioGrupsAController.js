function EdicioGrupsAController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "EdicioGrupsAController");
/* ============================== Attributes ===================================================== */
EdicioGrupsAController.prototype.DATA_TYPE = "EdicioGrupsAController";
EdicioGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
EdicioGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
EdicioGrupsAController.atTheStartOfPage = function() {
    EdicioGrupsAController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
EdicioGrupsAController.generateCommonContent = function() {
    Page.generateLogo (
        EdicioGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS, 
        EdicioGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}