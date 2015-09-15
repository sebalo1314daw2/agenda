function Session() {} 
    // It only represents a client's session (there isn't any comunication with the server)
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("ObjectApp", "Session");
    /* ============================== Attributes ===================================================== */
    Session.prototype.DATA_TYPE = "Session";
    Session.NAME =  Constants.PREFIX + Constants.DELIMITER + "emailAuthenticatedUser";
    /* =========================== Static methods ================================================= */
    /**
     * logIn()
     * This procedure logs in.
     * @author Sergio Baena Lopez
     * @version 21.0 
     * @param {EmailUser} emailUser the email of the user who logs in
     */
    Session.logIn = function(emailUser) {
        $.cookie( this.NAME, JSON.stringify(emailUser), {path: "/"} );
    }
   /**
    * isLogIn()
    * This function indicates if the user logs in or not
    * @author Sergio Baena Lopez
    * @version 21.0 
    * @return {boolean} if the user logs in or not
    */
   Session.isLogIn = function() {
       return $.cookie(this.NAME) != undefined;
   }
   /**
    * logOut()
    * This procedure logs out.
    * @author Sergio Baena Lopez
    * @version 21.0 
    */
    Session.logOut = function() {
        $.removeCookie( this.NAME, {path: "/"} );
    }