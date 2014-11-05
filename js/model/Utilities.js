function Utilities(){}
/*************************************************************************************************************
 *                                      Static methods                      
 ************************************************************************************************************/
/**
 * openPopup()
 * This procedure opens a popup in the middle of the screen. Its URL, width and height are going to specified.
 * @author Sergio Baena Lopez
 * @version 1.0
 * @param {String} url the popup's URL
 * @param {Number} width the popup's width
 * @param {Number} height the popup's height
 */
Utilities.openPopup = function(url, width, height) {
    var positionY = screen.height/2 - height/2;
    var positionX = screen.width/2 - width/2;
    window.open(
        url                     ,
        ""                      ,
        "left="             + 
        positionX           +
        ", top="            +
        positionY           +
        ", width="          +
        width               +
        ", height="         + 
        height              +
        ", scrollbars=yes"
    );
}