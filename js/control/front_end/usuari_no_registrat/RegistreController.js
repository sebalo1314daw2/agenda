function RegistreController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "RegistreController");
/* ============================== Attributes ===================================================== */
RegistreController.prototype.DATA_TYPE = "RegistreController";
RegistreController.URL_WHERE_THE_LOGO_REDIRECTS = "login.html";
RegistreController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
RegistreController.atTheStartOfPage = function() {
    RegistreController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
RegistreController.generateCommonContent = function() {
    Page.generateLogo (
        RegistreController.URL_WHERE_THE_LOGO_REDIRECTS, 
        RegistreController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateMenu();
    Page.generateFooter();
}