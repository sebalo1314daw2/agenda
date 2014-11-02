/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 1.0
 */
function atTheStartOfPage() {
    generateLogo("agenda.html");
    generateBottonPanelLooper();
//    generateMenuLooper();
//    generateRegisteredUserMenu();
    generateFooter();
    // LUEGO MEJORARLO
    $("select").chosen({
        search_contains : true,
        no_results_text : "No hi ha resultats que concideixen amb "
    });
}