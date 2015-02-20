function ViewUtilities() {} 
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("ObjectApp", "ViewUtilities");
/* ============================== Attributes ===================================================== */
ViewUtilities.prototype.DATA_TYPE = "ViewUtilities";
/* ============================== Static methods ================================================= */
/**
 * isHigherThanBrowser()
 * @description This function indicates if the specified HTML element is higher than browser
 * @author Sergio Baena Lopez
 * @version 18.1
 * @param {HTML object} element the element to compare with the browser
 * @return {boolean} if the specified HTML element is higher than browser
 */
ViewUtilities.isHigherThanBrowser = function(element) {
    var heightElement = $(element).outerHeight();
    var heightBrowser;
    if( ViewUtilities.isIE() ) {
        // The browser is IE
        heightBrowser = document.body.offsetHeight;
    } else {
        // The browser isn't IE
        heightBrowser = window.innerHeight;
    }
    return heightElement > heightBrowser;
}
/**
 * isIE()
 * This function indicates if the browser is Internet Explorer or not
 * @author Sergio Baena Lopez
 * @version 18.1
 * @return {boolean} if the browser is Internet Explorer or not
 */
ViewUtilities.isIE = function() {
    return navigator.appVersion.indexOf("MSIE") != -1;
}