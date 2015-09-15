function ContactForm() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("Form", "ContactForm");
/* ============================== Attributes ===================================================== */
ContactForm.prototype.DATA_TYPE = "ContactForm";
ContactForm.errMsg = new Array();
ContactForm.errMsg["issue"] = "<span class='fastReading'>Assumpte:</span> No es pot deixar buit.";
ContactForm.errMsg["message"] = "<span class='fastReading'>Missatge:</span> No es pot deixar buit.";
ContactForm.errMsg["email"] = "<span class='fastReading'>Correu electr&ograve;nic:</span> No es correspon a cap correu v&agrave;lid (no pot estar-hi buit).";
ContactForm.fieldList = new Array("issue", "message", "email");
ContactForm.SUCCESS_MSG = "El teu missatge s'ha enviat correctament. En breu, tindr&agrave;s la resposta al teu correu electr&ograve;nic.";
/* ============================== Static methods ================================================= */
/**
 * readIssueField()
 * @description This function reads the textbox of issue
 * @author Sergio Baena Lopez
 * @version 19.0
 * @return {String} the value of the issue's textbox
 */
ContactForm.readIssueField = function() {
    return $("#issue").val();
}
/**
 * readMessageField()
 * @description This function reads the textarea of message
 * @author Sergio Baena Lopez
 * @version 19.0
 * @return {String} the value of the message's textarea
 */
ContactForm.readMessageField = function() {
    return $("#message").val();
}
/**
 * readEmailField()
 * @description This function reads the textbox of email
 * @author Sergio Baena Lopez
 * @version 19.0
 * @return {String} the value of the email's textbox
 */
ContactForm.readEmailField = function() {
    return $("#email").val();
}

