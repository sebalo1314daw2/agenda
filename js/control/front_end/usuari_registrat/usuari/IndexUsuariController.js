function IndexUsuariController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "IndexUsuariController");
/* ============================== Attributes ===================================================== */
IndexUsuariController.prototype.DATA_TYPE = "IndexUsuariController";
IndexUsuariController.URL_WHERE_THE_LOGO_REDIRECTS = "../agenda/";
IndexUsuariController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
IndexUsuariController.atTheStartOfPage = function() {
    IndexUsuariController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
IndexUsuariController.generateCommonContent = function() {
    Page.generateLogo (
        IndexUsuariController.URL_WHERE_THE_LOGO_REDIRECTS, 
        IndexUsuariController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateRegisteredUserMenu();
    Page.generateFooter();
}
