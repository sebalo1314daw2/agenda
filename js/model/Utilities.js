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