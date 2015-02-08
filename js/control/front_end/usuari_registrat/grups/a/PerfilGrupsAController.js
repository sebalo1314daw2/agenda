function PerfilGrupsAController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "PerfilGrupsAController");
/* ============================== Attributes ===================================================== */
PerfilGrupsAController.prototype.DATA_TYPE = "PerfilGrupsAController";
PerfilGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
PerfilGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
PerfilGrupsAController.atTheStartOfPage = function() {
    PerfilGrupsAController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
PerfilGrupsAController.generateCommonContent = function() {
    Page.generateLogo (
        PerfilGrupsAController.URL_WHERE_THE_LOGO_REDIRECTS, 
        PerfilGrupsAController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}