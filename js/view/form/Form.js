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
/* ============================== Accessors ===================================================== */
Form.getSUCCESS_MSG = function(){ return this.SUCCESS_MSG; }
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