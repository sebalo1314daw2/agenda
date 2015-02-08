function TasquesDeUnDiaController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "TasquesDeUnDiaController");
/* ============================== Attributes ===================================================== */
TasquesDeUnDiaController.prototype.DATA_TYPE = "TasquesDeUnDiaController";
TasquesDeUnDiaController.URL_WHERE_THE_LOGO_REDIRECTS = "index.html";
TasquesDeUnDiaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../../img/logo/logo.png";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 17
 */
TasquesDeUnDiaController.atTheStartOfPage = function() {
    TasquesDeUnDiaController.generateCommonContent();
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
TasquesDeUnDiaController.generateCommonContent = function() {
    Page.generateLogo (
        TasquesDeUnDiaController.URL_WHERE_THE_LOGO_REDIRECTS, 
        TasquesDeUnDiaController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateBottonPanelLooper();
    Page.generateFooter();
}