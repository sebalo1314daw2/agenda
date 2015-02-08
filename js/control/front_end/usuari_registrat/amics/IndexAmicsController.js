function IndexAmicsController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "IndexAmicsController");
/* ============================== Attributes ===================================================== */
IndexAmicsController.prototype.DATA_TYPE = "IndexAmicsController";
IndexAmicsController.URL_WHERE_THE_LOGO_REDIRECTS = "../agenda/";
IndexAmicsController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
IndexAmicsController.atTheStartOfPage = function() {
    IndexAmicsController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
IndexAmicsController.generateCommonContent = function() {
    Page.generateLogo (
        IndexAmicsController.URL_WHERE_THE_LOGO_REDIRECTS, 
        IndexAmicsController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateRegisteredUserMenu();
    Page.generateFooter();
    Page.activateChosen();
}