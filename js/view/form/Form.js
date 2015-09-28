function Form() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Page", "Form");
/* ============================== Attributes ===================================================== */
Form.prototype.DATA_TYPE = "Form";
Form.errMsg = function() { 
    var err = "Error. Form.errMsg is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
}; // Associative array --> key: <wrong_field's_name                         value: <the_error's_message>
   // Sometimes --> key0: <wrong_field's_name>       key1:<its_cause>         value: <the_error's_message>
Form.fieldList = function() { 
    var err = "Error. Form.fieldList is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
}; 
Form.SUCCESS_MSG = function() { 
    var err = "Error. Form.SUCCESS_MSG is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
};
Form.FILE_IS_NOT_IMAGE = "No &eacute;s una imatge.";
/* ============================== Accessors ===================================================== */
Form.getSUCCESS_MSG = function(){ return this.SUCCESS_MSG; }
Form.getFILE_IS_NOT_IMAGE = function(){ return this.FILE_IS_NOT_IMAGE; }
/* ============================== Static methods ================================================= */
/**
 * showFormErrors()
 * This procedure shows the form's errors which we've just specified
 * @author Sergio Baena López
 * @version 19.0
 * @param {String[]} nameInvalidFieldsList the list of names of invalid fields. Sometimes, next to name, 
 * we have its cause, too (it's going to be separated with a "-").
 */
Form.showFormErrors = function(nameInvalidFieldsList) {
    // We add the "invalidField" class to the specified invalid fields and we show all the errors in an alert
    var errListOccurs = new Array();
    for(var i = 0; i < nameInvalidFieldsList.length; i++) {
       if(nameInvalidFieldsList[i].indexOf("-") == -1) { // The name doesn't have the "-" --> there isn't cause
           $( "#" + nameInvalidFieldsList[i] ).addClass("invalidField");
           errListOccurs.push( this.errMsg[ nameInvalidFieldsList[i] ] );
       } else { // The name have the "-" --> there's cause
           var tokensList = nameInvalidFieldsList[i].split("-");
           var nameInvalidField = tokensList[0];
           var cause = tokensList[1];
           $( "#" + nameInvalidField ).addClass("invalidField");
           errListOccurs.push( this.errMsg[nameInvalidField][cause] );
       }
    } 
    this.alert(errListOccurs);
}
/**
 * clearErrors()
 * @description This procedure clears the errors
 * @author Sergio Baena Lopez
 * @version 19.0
 */
Form.clearErrors = function() {
    for(var i = 0; i < this.fieldList.length; i++) {
        $("#" + this.fieldList[i]).removeClass("invalidField");
    }
}
/**
 * reset()
 * @description This procedure resets all the fields
 * @author Sergio Baena Lopez
 * @version 19.0
 */
Form.reset = function() {
    $("form")[0].reset();
}
/**
 * activateChosen()
 * @description This procedure activates the chosen in the page
 * @author Sergio Baena López
 * @version 17
 */
Form.activateChosen = function() {
    $("select").chosen({
        search_contains : true,
        no_results_text : "No hi ha resultats que concideixen amb "
    });
}
/**
 * activateCalendar()
 * @description This procedure activates the calendar (pickadate) in the page
 * @author Sergio Baena López
 * @version 17
 */
Form.activateCalendar = function() {
    $(".calendar").pickadate({
        min : new Date()
    });
}
/**
 * readImageProfileField()
 * @description This function reads the image profile's field (input file).
 * @author Sergio Baena Lopez
 * @version 21.0
 * @throws {UnsupportedFileToolsException} if the File object isn't sopported
 * @return {File} the inputed image 
 */
Form.readImageProfileField = function() {
    if(window.File == undefined) { // The File object isn't supported --> We throw an exception
        throw new UnsupportedFileToolsException("Error. Your browser doesn't sopport the File object");
    }
    return document.getElementById("imageProfile").files[0];
}
/**
 * obtainWidthImage()
 * @description This function obtains the hidden data about the indicated image's width for the user
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {Number} the hidden data about the indicated image's width for the user
 */
Form.obtainWidthImage = function() {
    var width = $("#widthImage").html();
    return parseInt(width);
}
/**
 * generateLooseImageTag()
 * @description This procedure generates a loose image's tag
 * @author Sergio Baena Lopez
 * @version 21.0
 * @param {String} url the URL of the image to generate
 * @param {Function} handler the function which will be executed when the image is loaded
 */
Form.generateLooseImageTag = function(url, handler) {
    var img = $("<img />");
    img.load(function() {
        handler(this.width);
    });
    img.attr("src", url);
}
/**
 * storeWidthImage()
 * @description This procedure stores the specified image's width in this form (hidden data)
 * @author Sergio Baena Lopez
 * @version 21.0
 * @param {Number} width the width to store
 */
Form.storeWidthImage = function(width) {
    $("#widthImage").html(width);
}
/**
 * generateImageTag()
 * @description This procedure generates the image tag from the specified URL.
 * @author Sergio Baena Lopez
 * @version 21.1
 * @param {String} url the URL whose image we want to generate
 */
Form.generateImageTag = function(url) {
    var label = $("label[for='imageProfile']");
    var img = $("<img alt='Ha fallat la c&agrave;rrega de la imatge'>");
    img.attr("src", url);
    var txt = "\nCanvia la foto";
    
    label.empty();
    label.append(img);
    label.append(txt);
}