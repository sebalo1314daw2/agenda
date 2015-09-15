function User(param0, param1, param2, param3, param4) {
    /* ============================== Attributes ===================================================== */
    this.id;                            // Number
    this.image;                         // Image
    this.name;                          // String
    this.surnames;                      // String
    this.password;                      // String
    this.confirmationPassword;          // String
    this.registerDate;                  // Date      
    
    this.withoutIdNorRegisterDateConstructor(param0, param1, param2, param3, param4);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("ObjectApp", "User");
    /* ============================== Attributes ===================================================== */
    User.prototype.DATA_TYPE = "User";
    /* ============================== Constructors ================================================== */
    User.prototype.withoutIdNorRegisterDateConstructor = function (
        image,
        name,
        surnames,
        password,
        confirmationPassword
    ) {
        this.setImage(image);
        this.setName(name);
        this.setSurnames(surnames);
        this.setPassword(password);
        this.setConfirmationPassword(confirmationPassword);
    }
    /* ============================== Accessors ===================================================== */
    User.prototype.getId = function(){ return this.id; }
    User.prototype.getImage = function(){ return this.image; }
    User.prototype.getName = function(){ return this.name; }
    User.prototype.getSurnames = function(){ return this.surnames; }
    User.prototype.getPassword = function(){ return this.password; }
    User.prototype.getConfirmationPassword = function(){ return this.confirmationPassword; }
    User.prototype.getRegisterDate = function(){ return this.registerDate; }
    
    User.prototype.setId = function(id){ this.id = id; }
    User.prototype.setImage = function(image){ this.image = image; }
    User.prototype.setName = function(name){ this.name = name; }
    User.prototype.setSurnames = function(surnames){ this.surnames = surnames; }
    User.prototype.setPassword = function(password){ this.password = password; }
    User.prototype.setConfirmationPassword = function(confirmationPassword) { 
        this.confirmationPassword = confirmationPassword; 
    }
    User.prototype.setRegisterDate = function(registerDate){ this.registerDate = registerDate; }
    /* =========================== Methods ================================================= */
    /**
     * isValid()
     * @description This function indicates if the user is valid or not. If the user isn't valid,
     * it's going to indicate the invalid attributes.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @return {Object[]} 
     * ["isValid"] {boolean} if the user is valid or not
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
    User.prototype.isValid = function() {
        var validationData = this.image.isValid();
        
        // Validation of the name  
        if( !Utilities.isValidSentence(this.name) ) { // name is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("name");
        }
        // Validation of the surnames 
        if( !Utilities.isValidSentence(this.surnames) ) { // surnames is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("surnames");
        }
        // Validation of the password (format)
        if( !Utilities.isValidPassword(this.password) ) { // password is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("password-format");
        }
        // Validation of the password (coincidence) 
        else if( !Utilities.isValidPassword(this.password, this.confirmationPassword) ) { // password is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("password-coincidence");
        }
        
        // The validation was finished
        return validationData; 
    }
    /**
     * toFormData()
     * @description This function convert this user to an form data object 
     * @author Sergio Baena Lopez
     * @version 21.0  
     * @throws {UnsupportedFileToolsException} if the FormData object isn't supported 
     * @return {FormData} the user to form data 
     */
    User.prototype.toFormData = function() {
         // We append all its attributes into the FormData object
        var formData = this.image.toFormData();
        
        formData.append("name"     + this.DATA_TYPE, this.name);
        formData.append("surnames" + this.DATA_TYPE, this.surnames);
        formData.append("password" + this.DATA_TYPE, this.password);
                
        return formData;
    }
    /**
     * encryptPassword()
     * @description This procedure encrypts the password (MD5)
     * @author Sergio Baena Lopez
     * @version 21.0  
     */
    User.prototype.encryptPassword = function() {
        this.password = hex_md5(this.password);
        this.confirmationPassword = undefined;
    }