/* ============================== Attributes ===================================================== */
String.prototype.DATA_TYPE = "String";
/* ============================== Accessors ====================================================== */
String.prototype.getDATA_TYPE = function(){ return this.DATA_TYPE; }
/* ============================ Non-static methods =============================================== */
/**
 * replaceAll()
 * This function replaces all the specified substrings to specified string 
 * @author Sergio Baena Lopez
 * @version 16.0
 * @param {String} searchValue The value that will be replaced by the new value
 * @param {String} newValue The value to replace the searchValue with
 * @return {String} A new String, where the specified value has been replaced by the new value
 */
String.prototype.replaceAll = function(searchValue, newValue) {
    var replacedString = this.toString(); 
    while( replacedString.indexOf(searchValue) != -1 ) { // We find something
        // We replace one time the searchValue
        replacedString = replacedString.replace(searchValue, newValue); 
    }
    // We've already remplaced all
    return replacedString;
}