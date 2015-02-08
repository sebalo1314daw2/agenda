function BusquedaPerAgregacioODesagregacioController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "BusquedaPerAgregacioODesagregacioController");
/* ============================== Attributes ===================================================== */
BusquedaPerAgregacioODesagregacioController.prototype.DATA_TYPE = "BusquedaPerAgregacioODesagregacioController";
BusquedaPerAgregacioODesagregacioController.URL_WHERE_THE_LOGO_REDIRECTS = "../../agenda/";
BusquedaPerAgregacioODesagregacioController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
BusquedaPerAgregacioODesagregacioController.atTheStartOfPage = function() {
    BusquedaPerAgregacioODesagregacioController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
BusquedaPerAgregacioODesagregacioController.generateCommonContent = function() {
    Page.generateLogo (
        BusquedaPerAgregacioODesagregacioController.URL_WHERE_THE_LOGO_REDIRECTS, 
        BusquedaPerAgregacioODesagregacioController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
    Page.activateChosen();
}