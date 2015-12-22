function Message(param0, param1, param2, param3) {
    /* ============================== Attributes ===================================================== */
    this.id;                // Number
    this.issue;             // String
    this.message;           // String
    this.email;             // String
    
    if(param3 == undefined) { // new Message(issue, message, email)
        this.withoutIdConstructor(param0, param1, param2);
    } else { // new Message(id, issue, message, email)
        this.fullConstructor(param0, param1, param2, param3);
    }
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("TableItem", "Message");
    /* ============================== Attributes ===================================================== */
    Message.prototype.DATA_TYPE = "Message";
    /* ============================== Constructors ================================================== */
    Message.prototype.withoutIdConstructor = function(issue, message, email) {
        this.setIssue(issue);
        this.setMessage(message);
        this.setEmail(email);
    }
    
    Message.prototype.fullConstructor = function(id, issue, message, email) {
        this.setId(id);
        this.setIssue(issue);
        this.setMessage(message);
        this.setEmail(email);
    }
    /* ============================== Accessors ================================================== */
    Message.prototype.getId = function(){ return this.id; }
    Message.prototype.getIssue = function(){ return this.issue; }
    Message.prototype.getMessage = function(){ return this.message; }
    Message.prototype.getEmail = function(){ return this.email; }

    Message.prototype.setId = function(id){ this.id = id; }
    Message.prototype.setIssue = function(issue){ this.issue = issue; }
    Message.prototype.setMessage = function(message){ this.message = message; }
    Message.prototype.setEmail = function(email){ this.email = email; }
    /* ============================== Methods ================================================== */
    /**
     * isValid()
     * @description This function indicates if the message is valid or not. If the message isn't valid,
     * it's going to indicate the invalid attributes.
     * @author Sergio Baena Lopez
     * @version 19.0
     * @return {Object[]} 
     * ["isValid"] {boolean} if the message is valid or not
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
    Message.prototype.isValid = function() {
        var validationData = new Array();
        validationData["isValid"] = true; 
        validationData["invalidAttributesList"] = new Array();
        // Validation of the issue
        if( !Utilities.isValidText(this.issue) ) { // issue is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("issue");
        }
        // Validation of the message
        if( !Utilities.isValidText(this.message) ) { // message is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("message");
        }
        // Validation of the email
        if( !Utilities.isValidEmail(this.email) ) { // email is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("email");
        } // The validation was finished
        return validationData;
    }
    /**
     * storeInDB()
     * @description This procedure stores this message to the database
     * @author Sergio Baena Lopez
     * @version 19.0
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
     */
    Message.prototype.storeInDB = function (
        serverPath, 
        beforeSendFunction,
        completeFunction,
        ajaxErrMsg,
        hackerAttackErrMsg
    ) {
        var wasStored;
        
        $.ajax({
            url: serverPath,
            type: "POST", 
            async: false,
            data: "action=1&msg=" + JSON.stringify(this),
            dataType: "json",
            success: function (response) {
                wasStored = response;
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
        
        if(!wasStored) {
            throw new HackerAttackException(hackerAttackErrMsg);
        }
    }