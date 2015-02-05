function Utilities(){}
/* ============================== Provoke inheritance ============================================ */
Utilities.prototype = new ObjectApp;
/* ============================== Attributes ===================================================== */
Utilities.prototype.DATA_TYPE = "Utilities";
/*************************************************************************************************************
 *                                      Static methods                      
 ************************************************************************************************************/
/**
 * openPopup()
 * This procedure opens a popup in the middle of the screen. Its URL, width and height are going to specified.
 * @author Sergio Baena Lopez
 * @version 1.0
 * @param {String} url the popup's URL
 */
Utilities.openPopup = function(url) {
    var WIDTH = 937;
    var HEIGHT = 581;
    var positionY = screen.height/2 - HEIGHT/2;
    var positionX = screen.width/2 - WIDTH/2;
    window.open(
        url                     ,
        ""                      ,
        "left="             + 
        positionX           +
        ", top="            +
        positionY           +
        ", width="          +
        WIDTH               +
        ", height="         + 
        HEIGHT              +
        ", scrollbars=yes"
    );
}
/**
 * centerElement()
 * This function centers the specified element in the web
 * @author Sergio Baena Lopez
 * @version 16.0
 * @param {HTML object} element the element to center
 * @return {HTML object} the element already center
 */
Utilities.centerElement = function(element) {
    var widthBrowser;
    var heightBrowser;
    var widthElement;
    var heightElement;
    // We calculates the width and the height of the browser
    if(navigator.appVersion.indexOf("MSIE") != -1) {
        // The browser is IE
        widthBrowser = document.body.offsetWidth;
        heightBrowser = document.body.offsetHeight;
    } else {
        // The browser isn't IE
        widthBrowser = window.innerWidth;
        heightBrowser = window.innerHeight;
    }
    // The width and the height of the browser already is calculated
    // Now, we calculates the width and the height of the specified element
    widthElement = $(element).outerWidth();
    heightElement = $(element).outerHeight();
    // The width and the height of the element already is calculated
    // We calculates the top and the left properties and then we set them
    $(element).css({
        top:    Math.round( (heightBrowser/2 - heightElement/2) ) + "px",
        left:   Math.round( (widthBrowser/2 - widthElement/2)   ) + "px"
    });
    // We return the modified element
    return element;
}
/**
 * showError()
 * This procedure shows the thrown exception to the user 
 * @author Sergio Baena Lopez
 * @version 16.0
 * @param {Exception} exception the exception to show
 */
Utilities.showError = function(exception) {
    alert(exception);
}