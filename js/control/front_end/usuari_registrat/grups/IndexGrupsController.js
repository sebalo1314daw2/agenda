function IndexGrupsController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "IndexGrupsController");
/* ============================== Attributes ===================================================== */
IndexGrupsController.prototype.DATA_TYPE = "IndexGrupsController";
IndexGrupsController.URL_WHERE_THE_LOGO_REDIRECTS = "../agenda/";
IndexGrupsController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
IndexGrupsController.atTheStartOfPage = function() {
    IndexGrupsController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
IndexGrupsController.generateCommonContent = function() {
    Page.generateLogo (
        IndexGrupsController.URL_WHERE_THE_LOGO_REDIRECTS, 
        IndexGrupsController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateRegisteredUserMenu();
    Page.generateFooter();
}