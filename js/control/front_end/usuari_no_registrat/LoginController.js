function LoginController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "LoginController");
/* ============================== Attributes ===================================================== */
LoginController.prototype.DATA_TYPE = "LoginController";
LoginController.URL_WHERE_THE_LOGO_REDIRECTS = "login.html";
LoginController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
LoginController.atTheStartOfPage = function() {
    LoginController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
LoginController.generateCommonContent = function() {
    Page.generateLogo (
        LoginController.URL_WHERE_THE_LOGO_REDIRECTS, 
        LoginController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateMenu();
    Page.generateFooter();
}