function Utilities() {}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("ObjectApp", "Utilities");
    /* ============================== Attributes ===================================================== */
    Utilities.prototype.DATA_TYPE = "Utilities";
    /* ============================== Static methods ================================================= */
    /**
     * isValidText()
     * @description This function indicates if the specified text is valid or not. A text is considered
     * valid when it isn't empty string nor only spaces
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} text the text to check
     * @return {boolean} if the specified text is valid or not
     */
    Utilities.isValidText = function(text) {
        return !Utilities.compareRegExpWithString(/^$|^[ ]+$/, text);
    }
    /**
     * isValidEmail()
     * @description This function indicates if the specified email is valid or not.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} email the email to check
     * @return {boolean} if the specified email is valid or not
     */
    Utilities.isValidEmail = function(email) {
        var pattern = /^[A-Za-z0-9]([.]?[A-Za-z0-9_-])*@[a-z0-9][a-z0-9-]+[a-z0-9]([.][a-z]{2,})+$/;
        return Utilities.compareRegExpWithString(pattern, email);
    }
    /**
     * isValidTypeImage()
     * @description This function indicates if the specified image's type is valid or not. We consider 
     * valid the types JPEG and PNG.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} type the image's type to check
     * @return {boolean} if the specified image's type is valid or not.
     */
    Utilities.isValidTypeImage = function(type) {
        var JPEG = "image/jpeg";
        var PNG = "image/png";
        
        return type == JPEG || type == PNG;
    }   
    /**
     * isValidSizeImage()
     * @description This function indicates if the specified image's size is valid or not. We consider 
     * valid until 5MB (5242880 bytes).
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {Number} size the image's size to check
     * @return {boolean} if the specified image's size is valid or not.
     */
    Utilities.isValidSizeImage = function(size) {
        return size <= 5242880;
    }
    /**
     * isValidWidthImage()
     * @description This function indicates if the specified image's width is valid or not. We consider 
     * valid least 720px.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {Number} width the image's width to check
     * @return {boolean} if the specified image's width is valid or not.
     */
    Utilities.isValidWidthImage = function(width) {
        return width >= 720;
    }
    /**
     * wasFileSelected()
     * @description This function indicates if the file was selected or not by the user
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {File} file the file to check
     * @return {boolean} if the file was selected or not by the user
     */
    Utilities.wasFileSelected = function(file) {
        return file != undefined;
    }
    /**
     * isValidWord()
     * @description This function indicates if the specified word is valid or not. A word is 
     * considered valid when it isn't an empty string and it only contains letters
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} word the word to check
     * @return {boolean} if the specified word is valid or not
     */
    Utilities.isValidWord = function(word) { 
        return Utilities.compareRegExpWithString( /^[a-zàáèéíòóúñç·üï]+$/, word.toLowerCase() );
    }
    /**
     * isValidSentence()
     * @description This function indicates if the specified sentence is valid or not. A sentence
     * is considered valid when it is a list of valid words (the words are separated with spaces)
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} sentence the sentence to check
     * @return {boolean} if the specified sentence is valid or not
     */
    Utilities.isValidSentence = function(sentence) { 
        var isValid = true;
        var wordList = sentence.trim().split(/[ ]+/);
        
        for(var i = 0; i < wordList.length; i++) {
            if( !Utilities.isValidWord( wordList[i] ) ) { // the word isn't valid
                isValid = false;
            }
        }
        
        return isValid;
    }
    /**
     * isValidAlias()
     * @description This function indicates if the specified alias is valid or not. An alias
     * is considered valid when it only contains letters, numbers, spaces and "_", "-" and "." 
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} alias the alias to check
     * @return {boolean} if the specified alias is valid or not
     */
    Utilities.isValidAlias = function(alias) { 
        var regExp0 = /^[a-zàáèéíòóúñç·üï0-9 _.-]+$/;
        var regExp1 = /^[ ]+$/;
        
        var string0 = alias.toLowerCase();
        var string1 = alias;   
         
        return Utilities.compareRegExpWithString(regExp0, string0) &&
               !Utilities.compareRegExpWithString(regExp1, string1);
    }
    /**
     * isValidPassword()
     * @description This function indicates if the password is valid or not
     * @author Sergio Baena Lopez
     * @version 21.0
     * @return {boolean} if the password is valid or not
     */
    Utilities.isValidPassword = function() {
        var isValid;
        
        switch( arguments.length ) {
            case 1:         // Utilities.isValidPassword(password)
                isValid = Utilities.isValidFormatPassword( arguments[0] );
                break;
            case 2:         // Utilities.isValidPassword(password, confirmationPassword)
                isValid = Utilities.isConfirmedPassword( arguments[0], arguments[1] );
                break;
        }
        
        return isValid;
    }
    /**
     * isValidFormatPassword()
     * @description This function indicates if the specified password is valid or not. An 
     * password is considered valid when it is valid text and it has the length >= 8 
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} password the password to check
     * @return {boolean} if the specified password is valid or not
     */
    Utilities.isValidFormatPassword = function(password) {
        return Utilities.isValidText(password) && password.length >= 8;
    }
    /**
     * isConfirmedPassword()
     * @description This function indicates if the specified password is successfully confirmed
     * or not
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {String} password the password to check
     * @param {String} confirmationPassword the confirmation of the specified password
     * @return {boolean}  if the specified password is successfully confirmed or not
     */
    Utilities.isConfirmedPassword = function(password, confirmationPassword) {
        return password == confirmationPassword;
    }
    /**
     * compareRegExpWithString()
     * @description This function compares the specified regular expression with the specified
     * string
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {/regExp/} regExp the regular expression for the comparation
     * @param {String} string the string to compare with the regular expression
     * @return {boolean} if the string meets the requirements of the regular expression
     */
    Utilities.compareRegExpWithString = function(regExp, string) { 
        var regExpObj = new RegExp(regExp);
        return regExpObj.test(string);
    }
    /**
     * joinValidationData()
     * @description This function joins all the specified validation data
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {Object[]} aValidationData a validation data to join (unlimited parameters)
     * @return {Object[]} the joined validation data
     */
    Utilities.joinValidationData = function() {
        var joinedValidationData = arguments[0];
        
        for(var i = 1; i < arguments.length; i++) {
            var aValidationData = arguments[i];
            // Setting "isValid"
            joinedValidationData["isValid"] = joinedValidationData["isValid"] && 
                                              aValidationData["isValid"];
            // Setting "invalidAttributesList"
            $.merge (
                joinedValidationData["invalidAttributesList"],
                aValidationData["invalidAttributesList"]
            );
        }
        
        return joinedValidationData;
    }
    /**
     * convertAttrListToFieldList()
     * @description This procedure converts the list of attributes to the list of fields
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {[]: attr (String) --> field (String)} equivalences the equivalences between
     * attributes and fields
     * @param {String[]} attrList the list of attributes to convert
     */
    Utilities.convertAttrListToFieldList = function(equivalences, attrList) {
        for(var key in equivalences) {
            var indexAttrList = attrList.indexOf(key);
            if(indexAttrList != -1) { // the key was found in the attrList --> we must do the convertion
                attrList[indexAttrList] = equivalences[key];
            }
        }
    }
    /**
     * validateCookieAccept()
     * @description This function validates the specified "cookie accept" (it is a boolean 
     * which indicates if the user accepts the cookies or not)
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {boolean} cookieAccept if the user accepts the cookies or not
     * @return {Object[]} 
     * ["isValid"] {boolean} if the cookie accept is valid or not
     * ["invalidAttributesList"] {String[]} the list of the "invalid attributes" 
     */
    Utilities.validateCookieAccept = function(cookieAccept) {
        var validationData = new Array(); 
        validationData["isValid"] = true; 
        validationData["invalidAttributesList"] = new Array();
        // Validation of the cookieAccept  
        if( !Utilities.isValidCookieAccept(cookieAccept) ) { // cookieAccept is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("cookieAccept");
        } 
        // The validation was finished
        return validationData; 
    }
    /**
     * isValidCookieAccept()
     * @description Thus function indicates if the specified cookie accept is valid or not
     * @author Sergio Baena Lopez
     * @version 21.0
     * @param {boolean} cookieAccept if the user accepts the cookies or not
     * @return {boolean} if the specified cookie accept is valid or not
     */
    Utilities.isValidCookieAccept = function(cookieAccept) {
        return cookieAccept;
    }