function EliminacioGrupsAController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "EliminacioGrupsAController");
/* ============================== Attributes ===================================================== */
EliminacioGrupsAController.prototype.DATA_TYPE = "EliminacioGrupsAController";
EliminacioGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
EliminacioGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
EliminacioGrupsAController.atTheStartOfPage = function() {
    EliminacioGrupsAController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
EliminacioGrupsAController.generateCommonContent = function() {
    Page.generateLogo (
        EliminacioGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS, 
        EliminacioGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}