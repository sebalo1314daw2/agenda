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
     * @version 19.0
     * @param {String} text the text to check
     * @return {boolean} if the specified text is valid or not
     */
    Utilities.isValidText = function(text) {
        var regExp = new RegExp(/^$|^[ ]+$/);
        return !regExp.test(text);
    }
    /**
     * isValidEmail()
     * @description This function indicates if the specified email is valid or not.
     * @author Sergio Baena Lopez
     * @version 19.0
     * @param {String} email the email to check
     * @return {boolean} if the specified email is valid or not
     */
    Utilities.isValidEmail = function(email) {
        var pattern = /^[A-Za-z0-9]([.]?[A-Za-z0-9_-])*@[a-z0-9][a-z0-9-]+[a-z0-9]([.][a-z]{2,})+$/;
        var regExp = new RegExp(pattern);
        return regExp.test(email);
    }