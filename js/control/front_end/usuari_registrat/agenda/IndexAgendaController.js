function IndexAgendaController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "IndexAgendaController");
/* ============================== Attributes ===================================================== */
IndexAgendaController.prototype.DATA_TYPE = "IndexAgendaController";
IndexAgendaController.URL_WHERE_THE_LOGO_REDIRECTS = "index.html";
IndexAgendaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
IndexAgendaController.atTheStartOfPage = function() {
    IndexAgendaController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
IndexAgendaController.generateCommonContent = function() {
    Page.generateLogo (
        IndexAgendaController.URL_WHERE_THE_LOGO_REDIRECTS, 
        IndexAgendaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateRegisteredUserMenu();
    Page.generateFooter();
}