function PerfilGrupsBController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "PerfilGrupsBController");
/* ============================== Attributes ===================================================== */
PerfilGrupsBController.prototype.DATA_TYPE = "PerfilGrupsBController";
PerfilGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
PerfilGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
PerfilGrupsBController.atTheStartOfPage = function() {
    PerfilGrupsBController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
PerfilGrupsBController.generateCommonContent = function() {
    Page.generateLogo (
        PerfilGrupsBController.URL_WHERE_THE_LOGO_REDIRECTS, 
        PerfilGrupsBController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}
