function RegistreController() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Controller", "RegistreController");
/* ============================== Attributes ===================================================== */
RegistreController.prototype.DATA_TYPE = "RegistreController";

RegistreController.URL_WHERE_THE_LOGO_REDIRECTS = "login.html";
RegistreController.URL_WHERE_THE_IMAGE_OF_THE_LOGO_IS = "../../../img/logo/logo.png";
RegistreController.URL_SERVER = "../../../php/control/call_controller.php";

RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST = new Array();
RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST["value-format"] = "email-format";
RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST["source-wasSelected"] = "imageProfile-wasSelected";
RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST["source-type"] = "imageProfile-type";
RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST["source-size"] = "imageProfile-size";
RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST["width"] = "imageProfile-width";
RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST["value-uniqueness"] = "email-uniqueness";
/* ============================== Static methods ================================================= */
/**
 * atTheStartOfPage()
 * @description Procedure aims load the page with all the common content.
 * @author Sergio Baena López
 * @version 21.2
 */
RegistreController.atTheStartOfPage = function() {
    var e;
    try {
        RegisterForm.addResizeEvent(RegistreController.centerPositionedElements);
        RegistreController.generateCommonContent();
        RegistreController.generateDynamicContent();
    } catch(e) {
        if(e.getDATA_TYPE == undefined) {  // thrown  exception --> System exception
            Page.showErrorForDeveloper(e);
        } else if(e.getDATA_TYPE() == "AjaxException") { // thrown  excepcion --> AjaxException
            Page.alert( new Array(e) );
        } else if(e.getDATA_TYPE() == "UnsupportedLocalStorageException") { // thrown  excepcion --> UnsupportedLocalStorageException
            // We don't do anything
        } else { // thrown exception --> a Exception object not expected 
            Page.showErrorForDeveloper(e);
        }
    }
}
/**
 * generateCommonContent()
 * This procedure generates the common content of the page
 * @author Sergio Baena Lopez
 * @version 21.2
 */
RegistreController.generateCommonContent = function() {
    this.generateCommonContentForNotRegisteredUsers();
}
/**
 * addNewNormalUser()
 * @description This procedure adds a new normal user. This function reads all the inputed data, validates 
 * them and, if everything are right, stores them in the database, logs in and redirects to the main page of
 * the registered users. If a data is invalid, it shows an alert of errors.
 * @author Sergio Baena Lopez
 * @version 22.2
 */
RegistreController.addNewNormalUser = function() {
    var e;
    try {
        if( !RegisterForm.isAlertActive() ) { // If the alert is active, the button won't do anything
            // Firstly, we read all the data 
            var imageSource = RegisterForm.readImageProfileField();
            var imageWidth = RegisterForm.obtainWidthImage();
            var name = RegisterForm.readNameField();
            var surnames = RegisterForm.readSurnamesField();
            var alias = RegisterForm.readAliasField();
            var email = RegisterForm.readEmailField();
            var password = RegisterForm.readPasswordField();
            var confirmationPassword = RegisterForm.readConfirmationPasswordField();
            var cookieAccept = RegisterForm.readCookieAcceptField();
            var noCloseSession = RegisterForm.readNoCloseSessionField();

            // Now, we create the objects
            var image = new Image(imageSource, imageWidth);
            var normalUser = new NormalUser (
                image,
                name,
                surnames, 
                password, 
                confirmationPassword,
                alias
            );
            var emailUser = new EmailUser(normalUser, email);

            // Then, we validate the data
            var validationData = Utilities.joinValidationData (
                    emailUser.isValid(),
                    Utilities.validateCookieAccept(cookieAccept)
            );
            Utilities.convertAttrListToFieldList (
                RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST,
                validationData["invalidAttributesList"] 
            );
            if( validationData["isValid"] ) { // the validation is successfully
                normalUser.encryptPassword();
                var validationDataFromServer = emailUser.addInDB (
                    this.URL_SERVER,
                    RegisterForm.activateLoadAnimation,
                    RegisterForm.deactivateLoadAnimation,
                    RegisterForm.getAJAX_ERR(),
                    RegisterForm.getHACKERS_WARNING()
                );
                // Now, we check if everything was well in the server

                Utilities.convertAttrListToFieldList (
                    RegistreController.EQUIVALENCES_ATTR_LIST_TO_FIELD_LIST,
                    validationDataFromServer["invalidAttributesList"] 
                );

                if( validationDataFromServer["isValid"] ) { 
                    // the validation from the server was successfully
                    // The user was registered successfully --> we redirect to the user
                    if(noCloseSession) {
                        AuthenticationCookie.write(emailUser);
                    }
                    document.location.href = "../usuari_registrat/agenda/";
                } else {
                    // the validation from the server wasn't successfully
                    // We show the errors of validation
                    RegisterForm.clearPasswords();
                    RegisterForm.clearErrors();
                    RegisterForm.showFormErrors( validationDataFromServer["invalidAttributesList"] );
                }
            } else { // the validation isn't successfully
                RegisterForm.clearPasswords();
                RegisterForm.clearErrors();
                RegisterForm.showFormErrors( validationData["invalidAttributesList"] );
            }
        }
    } catch(e) {
        if(e.getDATA_TYPE == undefined) {  // thrown  exception --> System exception
            RegisterForm.showErrorForDeveloper(e);
        } else if(e.getDATA_TYPE() == "AjaxException") { // thrown  excepcion --> AjaxException
            RegisterForm.alert( new Array(e) );
        } else if(e.getDATA_TYPE() == "UnsupportedFileToolsException") { // thrown  excepcion --> UnsupportedFileToolsException
            RegisterForm.alert( new Array( RegisterForm.getBROWSER_NOT_UPDATED_ERR() ) );
        } else if(e.getDATA_TYPE() == "HackerAttackException") { // thrown  excepcion --> HackerAttackException
            RegisterForm.alert( new Array(e) );
        } else { // thrown exception --> a Exception object not expected 
            RegisterForm.showErrorForDeveloper(e);
        }
    }
}
/**
 * generateWeb()
 * @description This procedure generates the web
 * @author Sergio Baena Lopez
 * @version 21.2
 * @param {Web} web the necessary information to generate the web
 */
RegistreController.generateWeb = function(web) {}