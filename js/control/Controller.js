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
/* ============================== Accessors ====================================================== */
Controller.getURL_WHERE_THE_LOGO_REDIRECTS = function(){ return Controller.URL_WHERE_THE_LOGO_REDIRECTS; }
Controller.getURL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = function() {
    return Controller.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS; 
}
Controller.getURL_SERVER = function(){ return Controller.URL_SERVER; }
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