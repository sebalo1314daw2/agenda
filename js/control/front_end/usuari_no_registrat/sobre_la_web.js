/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 16.0
 */
function atTheStartOfPage() {
    try {
       generateCommonContent();
       generateDynamicContent();
    } catch(e) {
        if(e.getDATA_TYPE() == "AjaxException") { // thrown  excepcion --> AjaxException
            Utilities.showError(e);
        } else if(e.getDATA_TYPE() == "UnsupportedLocalStorageException") { // thrown  excepcion --> UnsupportedLocalStorageException
            // We don't do anything
        } else {
            console.error(e);
        }
    }
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 16.0
 */
function generateCommonContent() {
    generateLogo("login.html", "../../../img/logo/logo.png");
    generateMenuLooper();
    generateMenu();
    generateFooter();
}
/**
 * generateDynamicContent()
 * This procedure generates the dynamic content of the page
 * @author Sergio Baena Lopez
 * @version 16.0
 * @throws {AjaxException} if Ajax causes an error 
 * @throws {UnsupportedLocalStorageException} if the local storage isn't sopported for browser
 */
function generateDynamicContent() {
    var web = Web.obtain (
        "../../../php/control/call_controller.php",
        function(){ activateLoadAnimation(); },
        function(){ deactivateLoadAnimation(); },
        "Hi ha un problema amb el servidor. Comprova que tens connexi&oacute; a Internet. Si no "     +
        "&eacute;s aix&iacute; es tracta d'un problema nostre i, per tant, prova a conectar-te una "  +
        "mica m&eacute;s tard i, disculpa les mol&egrave;sties. "
    );
    web.toHTMLTags();
    $("#text").html( web.getGeneralInfo() );
    web.storeIfItIsRequired();
}