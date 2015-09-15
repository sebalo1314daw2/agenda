function NormalUser(param0, param1, param2, param3, param4, param5) {
    /* ============================== Attributes ===================================================== */
    this.alias;         // String
    
    this.childWithoutIdNorRegisterDateConstructor(param0, param1, param2, param3, param4, param5);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("User", "NormalUser");
    /* ============================== Attributes ===================================================== */
    NormalUser.prototype.DATA_TYPE = "NormalUser";
    /* ============================== Constructors ================================================== */
    NormalUser.prototype.childWithoutIdNorRegisterDateConstructor = function (
        image,
        name,
        surnames,
        password,
        confirmationPasswords,
        alias
    ) {
        User.call(this, image, name, surnames, password, confirmationPasswords);
        this.setAlias(alias);
    } 
    /* ============================== Accessors ===================================================== */
    NormalUser.prototype.getAlias = function(){ return this.alias; }
    
    NormalUser.prototype.setAlias = function(alias){ this.alias = alias; }
    /* =========================== Methods ================================================= */
    /**
     * parentIsValid()
     * @description This function indicates if the parent is valid or not. If the parent isn't valid,
     * it's going to indicate the invalid attributes.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @return {Object[]} 
     * ["isValid"] {boolean} if the parent is valid or not
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
    NormalUser.prototype.parentIsValid = NormalUser.prototype.isValid;
    /**
     * isValid()
     * @description This function indicates if the normal user is valid or not. If the normal user
     * isn't valid, it's going to indicate the invalid attributes.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @return {Object[]} 
     * ["isValid"] {boolean} if the normal user is valid or not
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
    NormalUser.prototype.isValid = function() {
        var validationData = this.parentIsValid();
        
        // Validation of the alias (format)
        if( !Utilities.isValidAlias(this.alias) ) { // alias is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("alias-format");
        }
        
        return validationData;
    }
    /**
     * parentToFormData()
     * @description This function convert the parent to an form data object 
     * @author Sergio Baena Lopez
     * @version 21.0  
     * @throws {UnsupportedFileToolsException} if the FormData object isn't supported 
     * @return {FormData} the parent to form data 
     */
    NormalUser.prototype.parentToFormData = NormalUser.prototype.toFormData;
    /**
     * toFormData()
     * @description This function convert this normal user to an form data object 
     * @author Sergio Baena Lopez
     * @version 21.0  
     * @throws {UnsupportedFileToolsException} if the FormData object isn't supported 
     * @return {FormData} the normal user to form data 
     */
    NormalUser.prototype.toFormData = function() {
         // We append all its attributes into the FormData object
        var formData = this.parentToFormData();
        
        formData.append("alias" + this.DATA_TYPE, this.alias);

        return formData;
    }