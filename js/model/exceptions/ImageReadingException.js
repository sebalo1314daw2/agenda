function ImageReadingException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("Exception", "ImageReadingException");
    /* ============================== Attributes ===================================================== */
    ImageReadingException.prototype.DATA_TYPE = "ImageReadingException";
    /* ============================== Constructors ===================================================== */
    ImageReadingException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }