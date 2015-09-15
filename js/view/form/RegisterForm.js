function RegisterForm() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Form", "RegisterForm");
/* ============================== Attributes ===================================================== */
RegisterForm.prototype.DATA_TYPE = "RegisterForm";
RegisterForm.fieldList = new Array("imageProfile", "name", "surnames", "password", "alias", "email");

RegisterForm.errMsg = new Array();
RegisterForm.errMsg["imageProfile"] = new Array();
RegisterForm.errMsg["imageProfile"]["wasSelected"] = "<span class='fastReading'>Imatge:</span> S'ha de seleccionar-ne una.";
RegisterForm.errMsg["imageProfile"]["type"] = "<span class='fastReading'>Imatge:</span> No &eacute;s una imatge (JPEG o PNG).";
RegisterForm.errMsg["imageProfile"]["width"] = "<span class='fastReading'>Imatge:</span> L'amplada &eacute;s massa petita (>= 720 p&iacute;xels).";
RegisterForm.errMsg["imageProfile"]["size"] = "<span class='fastReading'>Imatge:</span> El tamany &eacute;s massa gran (<= 5MB).";
RegisterForm.errMsg["name"] = "<span class='fastReading'>Nom:</span> Solament pot contenir lletres (no pot estar-hi buit).";
RegisterForm.errMsg["surnames"] = "<span class='fastReading'>Cognoms:</span> Solament pot contenir lletres (no pot estar-hi buit).";
RegisterForm.errMsg["password"] = new Array();
RegisterForm.errMsg["password"]["format"] = "<span class='fastReading'>Contrasenya:</span> De m&iacute;nim de 8 car&agrave;cters (no pot estar-hi buit).";
RegisterForm.errMsg["password"]["coincidence"] = "<span class='fastReading'>Contrasenya:</span> No coincideix.";
RegisterForm.errMsg["alias"] = new Array();
RegisterForm.errMsg["alias"]["format"] = "<span class='fastReading'>Alies:</span> Solament pot contenir car&agrave;cters alfanum&egrave;rics i alguns car&agrave;cters especials com el gui&oacute; baix, el gui&oacute; o el punt (no pot estar-hi buit).";
RegisterForm.errMsg["alias"]["uniqueness"] = "<span class='fastReading'>Alies:</span> Est&agrave; en &uacute;s.";
RegisterForm.errMsg["email"] = new Array();
RegisterForm.errMsg["email"]["format"] = "<span class='fastReading'>Correu electr&ograve;nic:</span> No es correspon a cap correu v&agrave;lid (no pot estar-hi buit).";
RegisterForm.errMsg["email"]["uniqueness"] = "<span class='fastReading'>Correu electr&ograve;nic:</span> Est&agrave; en &uacute;s.";
RegisterForm.errMsg["cookieAccept"] = "<span class='fastReading'>Cookies:</span> Has d'acceptar-les.";
/* ============================== Static methods ================================================= */
/**
 * readNameField()
 * @description This function reads the textbox of name
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {String} the value of the name's textbox
 */
RegisterForm.readNameField = function() {
    return $("#name").val();
}
/**
 * readSurnamesField()
 * @description This function reads the textbox of surnames
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {String} the value of the surnames' textbox
 */
RegisterForm.readSurnamesField = function() {
    return $("#surnames").val();
}
/**
 * readAliasField()
 * @description This function reads the textbox of alias
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {String} the value of the alias' textbox
 */
RegisterForm.readAliasField = function() {
    return $("#alias").val();
}
/**
 * readEmailField()
 * @description This function reads the textbox of email
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {String} the value of the email' textbox
 */
RegisterForm.readEmailField = function() {
    return $("#email").val();
}
/**
 * readPasswordField()
 * @description This function reads the textbox of password
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {String} the value of the password' textbox
 */
RegisterForm.readPasswordField = function() {
    return $("#password").val();
}
/**
 * readConfirmationPasswordField()
 * @description This function reads the textbox of confirmation's password 
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {String} the value of the textbox of confirmation's password 
 */
RegisterForm.readConfirmationPasswordField = function() {
    return $("#confirmationPassword").val();
}
/**
 * readCookieAcceptField()
 * @description This function reads the checkbox of acceptation of cookies, ie, it indicates if the
 * checkbox is checked or not
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {boolean} if the checkbox is checked or not
 */
RegisterForm.readCookieAcceptField = function() {
    return $("#cookieAccept").attr("checked");
}
/**
 * readNoCloseSessionField()
 * @description This function reads the checkbox of no loging out, ie, it indicates if the
 * checkbox is checked or not
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {boolean} if the checkbox is checked or not
 */
RegisterForm.readNoCloseSessionField = function() {
    return $("#noCloseSession").attr("checked");
}
/**
 * clearPasswords()
 * @description This procedure clears the passwords of the form
 * @author Sergio Baena Lopez
 * @version 21.0
 */
RegisterForm.clearPasswords = function() {
    $("#password").val("");
    $("#confirmationPassword").val("");
}