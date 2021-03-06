function Controller() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("ObjectApp", "Controller");
/* ============================== Abstract static attributes ============================================== */
Controller.URL_WHERE_THE_LOGO_REDIRECTS = function() { 
    var err = "Error. Controller.URL_WHERE_THE_LOGO_REDIRECTS is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
};
Controller.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = function() { 
    var err = "Error. Controller.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
};
Controller.URL_SERVER = function() { 
    var err = "Error. Controller.URL_SERVER is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
}
Controller.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST = function() { 
    var err = "Error. Controller.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
}
/* ============================== Accessors ====================================================== */
Controller.getURL_WHERE_THE_LOGO_REDIRECTS = function(){ return this.URL_WHERE_THE_LOGO_REDIRECTS; }
Controller.getURL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = function() {
    return this.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS; 
}
Controller.getURL_SERVER = function(){ return this.URL_SERVER; }
/* ============================== Abstract methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena Lopez
 * @version 17
 */
Controller.atTheStartOfPage = function() {
    var err = "Error. Controller.atTheStartOfPage() is an abstract method.";
    throw new AbstractAttributeOrMethodException(err);
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
Controller.generateCommonContent = function() {
    var err = "Error. Controller.generateCommonContent() is an abstract method.";
    throw new AbstractAttributeOrMethodException(err);
}
/**
 * generateWeb()
 * @description This procedure generates the web
 * @author Sergio Baena Lopez
 * @version 20.6
 * @param {Web} web the necessary information to generate the web
 */
Controller.generateWeb = function(web) {
    var err = "Error. Controller.generateWeb() is an abstract method.";
    throw new AbstractAttributeOrMethodException(err);
}
/* ============================== Methods ================================================= */
/**
 * openPopup()
 * This procedure opens a popup whose path is specified
 * @author Sergio Baena Lopez
 * @version 17
 * @param {String} path the popup's path
 */
Controller.openPopup = function(path) {
    Page.openPopup(path);
}
/**
 * centerPositionedElements()
 * @description This procedure centers all the positioned elements
 * @author Sergio Baena Lopez
 * @version 20.3
 */
Controller.centerPositionedElements = function() {
    var e;
    try {
        var id = Page.obtainIdOfTheCenteredProcess();
        clearTimeout(id);
        id = setTimeout(function() {
            Page.centerLoadAnimation();
            Page.centerAlert();
            Page.centerConfirm();
        }, 100);
        Page.storeIdOfTheCenteredProcess(id);
    } catch(e) {
        Page.showErrorForDeveloper(e);
    }
}
/**
 * closeAlert()
 * @description This procedure closes the alert of the web
 * @author Sergio Baena Lopez
 * @version 20.3
 */
Controller.closeAlert = function() {
    var e;
    try {
        Page.closeAlert();
    } catch(e) {
        Page.showErrorForDeveloper(e);
    }
}
/**
 * generateCommonContentForNotRegisteredUsers()
 * This procedure generates the common content of the page for not registered users
 * @author Sergio Baena Lopez
 * @version 20.6 
 */
Controller.generateCommonContentForNotRegisteredUsers = function() {
   Page.generateLogo (
        this.URL_WHERE_THE_LOGO_REDIRECTS, 
        this.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    Page.generateMenuLooper();
    Page.generateMenu(); 
} 
/**
 * generateDynamicContent()
 * This procedure generates the dynamic content of the page
 * @author Sergio Baena Lopez
 * @version 20.6
 * @throws {AjaxException} if Ajax causes an error 
 * @throws {UnsupportedLocalStorageException} if the local storage isn't sopported for browser
 */
Controller.generateDynamicContent = function() {
    var web = Web.obtain (
        this.URL_SERVER, 
        Page.activateLoadAnimation, 
        Page.deactivateLoadAnimation,
        Page.getAJAX_ERR()
    );
    web.toHTMLTags ( 
        Page.getBOLD_TAG("start"),
        Page.getBOLD_TAG("end"),
        Page.getPARAGRAPH_TAG("start"),
        Page.getPARAGRAPH_TAG("end")
    ); 
    this.generateWeb(web);
    Page.generateFooter( web.getFooter() );
    web.storeIfItIsRequired();
}
/**
 * generateWidthImageHiddenData()
 * @description This procedure generates the hidden data about the image's width which the user indicated
 * @author Sergio Baena Lopez
 * @version 21.0
 */
Controller.generateWidthImageHiddenData = function() {
    var imageSource = Form.readImageProfileField();
    var image = new Image(imageSource);
    image.obtainURLFromSource(Controller.generateLooseImageTag);
}
/**
 * generateLooseImageTag()
 * @description This procedure generates a loose image's tag to get its width and write it in the document
 * @author Sergio Baena Lopez
 * @version 21.0
 * @param {String} url the URL of the image to generate
 */
Controller.generateLooseImageTag = function(url) {
    Form.generateLooseImageTag(url, Controller.storeWidthImage);
}
/**
 * storeWidthImage()
 * @description This procedure stores the specified image's width in the document.
 * @author Sergio Baena Lopez
 * @version 21.0
 * @param {Number} width the width to store
 */
Controller.storeWidthImage = function(width) {
    Form.storeWidthImage(width);
}
/**
 * generatePrevious()
 * @description This procedure generates the previous of the image which the user want to upload
 * @author Sergio Baena Lopez
 * @version 21.1
 */
Controller.generatePrevious = function() {
    Page.activateLoadAnimation();
    var source = Form.readImageProfileField();
    var image = new Image(source);
    image.obtainURLFromSource(this.generateImageTag);
}
/**
 * generateImageTag()
 * @description This procedure generates the image tag from the specified URL.
 * @author Sergio Baena Lopez
 * @version 21.1
 * @param {String} url the URL whose image we want to generate
 */
Controller.generateImageTag = function(url) {
    Form.generateImageTag(url);
    Page.deactivateLoadAnimation();
}
/**
 * updateSelectedImage()
 * @description This procedure updates the selected image, ie, it updates stored width and previous.
 * @author Sergio Baena Lopez
 * @version 21.1
 */
Controller.updateSelectedImage = function() {
    var e;
    try {
        this.generatePrevious();
        this.generateWidthImageHiddenData();
    } catch(e) {
        if(e.getDATA_TYPE == undefined) {  // thrown  exception --> System exception
            Page.showErrorForDeveloper(e);
        } else if(e.getDATA_TYPE() == "UnsupportedFileToolsException") { // thrown  excepcion --> UnsupportedFileToolsException
            Page.alert( new Array( Page.getBROWSER_NOT_UPDATED_ERR() ) );
        } else if(e.getDATA_TYPE() == "SourceIsNotImageException") { // thrown  excepcion --> SourceIsNotImageException
            Page.alert( new Array( Form.getFILE_IS_NOT_IMAGE() ) );
        } else { // thrown exception --> a Exception object not expected 
            Page.showErrorForDeveloper(e);
        }
        Page.deactivateLoadAnimation();
    }
}