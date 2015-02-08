function ContacteController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "ContacteController");
/* ============================== Attributes ===================================================== */
ContacteController.prototype.DATA_TYPE = "ContacteController";
ContacteController.URL_WHERE_THE_LOGO_REDIRECTS = "login.html";
ContacteController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
ContacteController.atTheStartOfPage = function() {
    ContacteController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
ContacteController.generateCommonContent = function() {
    Page.generateLogo (
        ContacteController.URL_WHERE_THE_LOGO_REDIRECTS, 
        ContacteController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateMenu();
    Page.generateFooter();
}