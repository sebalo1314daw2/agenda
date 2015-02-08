function GestioDeMembresController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "GestioDeMembresController");
/* ============================== Attributes ===================================================== */
GestioDeMembresController.prototype.DATA_TYPE = "GestioDeMembresController";
GestioDeMembresController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
GestioDeMembresController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
GestioDeMembresController.atTheStartOfPage = function() {
    GestioDeMembresController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
GestioDeMembresController.generateCommonContent = function() {
    Page.generateLogo (
        GestioDeMembresController.URL_WHERE_THE_LOGO_REDIRECTS, 
        GestioDeMembresController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
    Page.activateChosen();
}