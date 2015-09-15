function Cookie() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("ObjectApp", "Cookie");
/* ============================== Abstract static attributes ============================================== */
Cookie.NAME = function() { 
    var err = "Error. Cookie.NAME is an abstract attribute.";
    throw new AbstractAttributeOrMethodException(err); 
};
/* ============================== Attributes ===================================================== */
Cookie.prototype.DATA_TYPE = "Cookie";
/* ============================== Abstract static methods ================================================= */
/**
 * read()
 * @description This function reads this cookie 
 * @author Sergio Baena Lopez
 * @version 21.0
 * @return {Object} the data which the cookie contained
 */
Cookie.read = function() {
    var err = "Error. Cookie.read() is an abstract method.";
    throw new AbstractAttributeOrMethodException(err);
}
/**
 * write()
 * @description This procedure writes this cookie 
 * @author Sergio Baena Lopez
 * @version 21.0
 * @param {Object} data the data to write in this cookie
 */
Cookie.write = function(data) {
    var err = "Error. Cookie.write() is an abstract method.";
    throw new AbstractAttributeOrMethodException(err);
}
