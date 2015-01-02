/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 1.0
 */
function atTheStartOfPage()
{
    generateLogo("index.html", "../../../../img/logo/logo.png");
    generateMenuLooper();
    generateRegisteredUserMenu();
    generateFooter();
}