function AbstractAttributeOrMethodException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("Exception", "AbstractAttributeOrMethodException");
    /* ============================== Attributes ===================================================== */
    AbstractAttributeOrMethodException.prototype.DATA_TYPE = "AbstractAttributeOrMethodException";
    /* ============================== Constructors ===================================================== */
    AbstractAttributeOrMethodException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }