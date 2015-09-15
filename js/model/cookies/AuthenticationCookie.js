function AuthenticationCookie() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Cookie", "AuthenticationCookie");
/* ============================== Static attributes ============================================== */
AuthenticationCookie.NAME = Constants.PREFIX + Constants.DELIMITER + "authentication";
/* ============================== Attributes ===================================================== */
AuthenticationCookie.prototype.DATA_TYPE = "AuthenticationCookie";
/* ============================== Static methods ================================================= */
/**
 * write()
 * @description This procedure writes this cookie 
 * @author Sergio Baena Lopez
 * @version 21.0
 * @param {EmailUser} emailUser the email user which contains the information about authentication
 */
AuthenticationCookie.write = function(emailUser) {
    // Generating the data to write
    var data = new Object();
    data["email"] = emailUser.getValue();
    data["password"] = emailUser.getUser().getPassword();
    // Writing this data
    $.cookie( this.NAME, JSON.stringify( jQuery.makeArray(data) ), {path: "/", expires: 43800} );   
}