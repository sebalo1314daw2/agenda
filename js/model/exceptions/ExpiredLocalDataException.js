function ExpiredLocalDataException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("Exception", "ExpiredLocalDataException");
    /* ============================== Attributes ===================================================== */
    ExpiredLocalDataException.prototype.DATA_TYPE = "ExpiredLocalDataException";
    /* ============================== Constructors ===================================================== */
    ExpiredLocalDataException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }