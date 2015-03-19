function ContacteController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "ContacteController");
/* ============================== Attributes ===================================================== */
ContacteController.prototype.DATA_TYPE = "ContacteController";
ContacteController.URL_WHERE_THE_LOGO_REDIRECTS = "login.html";
ContacteController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
ContacteController.URL_SERVER = "../../../php/control/call_controller.php";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 20.3
 */
ContacteController.atTheStartOfPage = function() {
    var e;
    try {
        ContacteController.generateCommonContent();
        ContacteController.generateDynamicContent();
        ContactForm.addResizeEvent(ContacteController.centerPositionedElements);
    } catch(e) {
        ContactForm.showErrorForDeveloper(e);
    }
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 19.1
 */
ContacteController.generateCommonContent = function() {
    ContactForm.generateLogo (
        ContacteController.URL_WHERE_THE_LOGO_REDIRECTS, 
        ContacteController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS
    );
    ContactForm.generateMenuLooper();
    ContactForm.generateMenu();
}
/**
 * generateDynamicContent()
 * This procedure generates the dynamic content of the page
 * @author Sergio Baena Lopez
 * @version 19.1
 * @throws {AjaxException} if Ajax causes an error 
 * @throws {UnsupportedLocalStorageException} if the local storage isn't sopported for browser
 */
ContacteController.generateDynamicContent = function() {
    var web = Web.obtain (
        ContacteController.URL_SERVER, 
        ContactForm.activateLoadAnimation, 
        ContactForm.deactivateLoadAnimation,
        ContactForm.getAJAX_ERR()
    );
    web.toHTMLTags ( 
        ContactForm.getBOLD_TAG("start"),
        ContactForm.getBOLD_TAG("end"),
        ContactForm.getPARAGRAPH_TAG("start"),
        ContactForm.getPARAGRAPH_TAG("end")
    );  
    ContactForm.generateFooter( web.getFooter() );
    web.storeIfItIsRequired();
}
/**
 * sendMsg()
 * @description This procedure sends the message which the user inputed to the database. After, the form
 * is going to be validated.
 * @author Sergio Baena Lopez
 * @version 19.1
 */
ContacteController.sendMsg = function() {
    var e;
    try {
        if( !ContactForm.isAlertActive() ) { // If the alert is active, the button won't do anything
            // We obtain the values of the fields
            var issue = ContactForm.readIssueField();
            var message = ContactForm.readMessageField();
            var email = ContactForm.readEmailField();
            // We input all the values in the message object
            var msg = new Message(issue, message, email);
            var validationResult = msg.isValid();
            if( validationResult["isValid"] ) { // the validation is successfully --> we store the msg
                // Clear errors
                ContactForm.clearErrors();
                // Store
                msg.storeInDB ( 
                    this.URL_SERVER,
                    ContactForm.activateLoadAnimation,
                    ContactForm.deactivateLoadAnimation,
                    ContactForm.getAJAX_ERR(),
                    ContactForm.getHACKERS_WARNING()
                );
                // Reset
                ContactForm.reset();
                // Confirmation
                ContactForm.alert( new Array( ContactForm.getSUCCESS_MSG() ) );
            } else { // the validation isn't successfully
                ContactForm.clearErrors();
                ContactForm.showFormErrors( validationResult["invalidAttributesList"] );
            }
        }
    } catch(e) {
        if(e.getDATA_TYPE == undefined) {  // thrown  excepcion --> System exception
            ContactForm.showErrorForDeveloper(e);
        } else if (
            e.getDATA_TYPE() == "HackerAttackException" || e.getDATA_TYPE() == "AjaxException"
        ) { 
            ContactForm.alert( new Array(e) );
        } else { // thrown exception --> a Exception object not expected 
            ContactForm.showErrorForDeveloper(e);
        }
    }
}