function SourceIsNotImageException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("Exception", "SourceIsNotImageException");
    /* ============================== Attributes ===================================================== */
    SourceIsNotImageException.prototype.DATA_TYPE = "SourceIsNotImageException";
    /* ============================== Constructors ===================================================== */
    SourceIsNotImageException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }