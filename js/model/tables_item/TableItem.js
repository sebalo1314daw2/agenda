function TableItem() {}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("ObjectApp", "TableItem");
    /* ============================== Attributes ===================================================== */
    TableItem.prototype.DATA_TYPE = "TableItem";
    /* ============================== Abstract methods ================================================= */
    /**
     * isValid()
     * @description This function indicates if the table item is valid or not. If the table item isn't
     * valid, it's going to indicate the invalid attributes.
     * @author Sergio Baena Lopez
     * @version 22.0
     * @return {Object[]} 
     * ["isValid"] {boolean} if the table item is valid or not
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
     TableItem.prototype.isValid = function() {
        var err = "Error. TableItem.isValid() is an abstract method.";
        throw new AbstractAttributeOrMethodException(err);
     }
    /**
    * toFormData()
    * @description This function convert this table item to an form data object 
    * @author Sergio Baena Lopez
    * @version 22.0  
    * @throws {UnsupportedFileToolsException} if the FormData object isn't supported 
    * @return {FormData} the table item to form data 
    */
    TableItem.prototype.toFormData = function() {
        var err = "Error. TableItem.toFormData() is an abstract method.";
        throw new AbstractAttributeOrMethodException(err);
    }