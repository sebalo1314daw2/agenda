function EmailUser(param0, param1) {
    /* ============================== Attributes ===================================================== */
    this.id;                            // Number
    this.user;                          // User
    this.value;                         // String
    this.isValid;                       // boolean
    this.deadlineValidation;            // Date
    this.alphaNumValidation;            // String
    
    this.userAndValueConstructor(param0, param1); // new EmailUser(user, value)
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("ObjectApp", "EmailUser");
    /* ============================== Attributes ===================================================== */
    EmailUser.prototype.DATA_TYPE = "EmailUser";
    /* ============================== Constructors ================================================== */
    EmailUser.prototype.userAndValueConstructor = function(user, value) {
        this.setUser(user);
        this.setValue(value);
    } 
    /* ============================== Accessors ===================================================== */
    EmailUser.prototype.getId = function(){ return this.id; }
    EmailUser.prototype.getUser = function(){ return this.user; }
    EmailUser.prototype.getValue = function(){ return this.value; }
    EmailUser.prototype.isIsValid = function(){ return this.isValid; }
    EmailUser.prototype.getDeadlineValidation = function(){ return this.deadlineValidation; }
    EmailUser.prototype.getAlphaNumValidation = function(){ return this.alphaNumValidation; }
    
    EmailUser.prototype.setId = function(id){ this.id = id; }
    EmailUser.prototype.setUser = function(user){ this.user = user; }
    EmailUser.prototype.setValue = function(value){ this.value = value; }
    EmailUser.prototype.setIsValid = function(isValid){ this.isValid = isValid; }
    EmailUser.prototype.setDeadlineValidation = function(deadlineValidation){ 
        this.deadlineValidation = deadlineValidation; 
    }
    EmailUser.prototype.setAlphaNumValidation = function(alphaNumValidation) { 
        this.alphaNumValidation = alphaNumValidation; 
    }
    /* =========================== Methods ================================================= */
    /**
     * isValid()
     * @description This function indicates if the email of the user is valid or not. If the email of the
     * user isn't valid, it's going to indicate the invalid attributes.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @return {Object[]} 
     * ["isValid"] {boolean} if the email of the user is valid or not
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
    EmailUser.prototype.isValid = function() {
        var validationData = this.user.isValid();
       
        // Validation of the value (format) 
        if( !Utilities.isValidEmail(this.value) ) { // value (format) is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("value-format");
        } 

        return validationData; 
    }
    /**
     * addInDB()
     * @description This function adds this emailUser in the database. In addition to validate
     * and insert all the data, it logs in to the user.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @throws {AjaxException} if Ajax causes an error 
     * @throws {HackerAttackException} if an user has just tried sending invalid data (he has got over
     * the barrier of JavaScript)
     * @param {String} serverPath the server's path for we do the Ajax's call
     * @param {Function} beforeSendFunction the function which is going to execute before of the data's
     * sending
     * @param {Function} completeFunction the function which is going to execute when the Ajax's call 
     * completed
     * @param {String} ajaxErrMsg the message of AjaxException if it throws
     * @param {String} hackerAttackErrMsg the message of HackerAttackException if it throws
     * @return {Object[]} 
     * ["isValid"] {boolean} if the emailUser is valid or not (the rest to validate)
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
    EmailUser.prototype.addInDB = function (
        serverPath,
        beforeSendFunction, 
        completeFunction, 
        ajaxErrMsg, 
        hackerAttackErrMsg
    ) { 
        var formData = this.toFormData();
        formData.append("action", "2");
        var outputData;
        
        $.ajax({
            url: serverPath,
            type: "POST", 
            async: false,
            data: formData,
            dataType: "json",
            processData : false, 
            contentType : false, 
            success: function (response) {
                outputData = response;
            },
            beforeSend: function (xhr) {
                beforeSendFunction();
            },
            complete: function (xhr, status) {
                completeFunction();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                throw new AjaxException(ajaxErrMsg);
            }	
        });
        // We already have the output data
        
        // Then, we check if someone tried to do a hacker attack.
        if( outputData["isHackerAttack"] ) {
            throw new HackerAttackException(hackerAttackErrMsg);
        }
        
        Session.logIn(this);
        return outputData["validationData"];
    }
    /**
     * toFormData()
     * @description This function convert this email user to an form data object 
     * @author Sergio Baena Lopez
     * @version 21.0  
     * @throws {UnsupportedFileToolsException} if the FormData object isn't supported 
     * @return {FormData} the email user to form data 
     */
    EmailUser.prototype.toFormData = function() {
         // We append all its attributes into the FormData object
        var formData = this.user.toFormData();
        
        formData.append("value" + this.DATA_TYPE, this.value);
              
        return formData;
    }