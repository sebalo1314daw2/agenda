function UnsupportedFileToolsException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("Exception", "UnsupportedFileToolsException");
    /* ============================== Attributes ===================================================== */
    UnsupportedFileToolsException.prototype.DATA_TYPE = "UnsupportedFileToolsException";
    /* ============================== Constructors ===================================================== */
    UnsupportedFileToolsException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }