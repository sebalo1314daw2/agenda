function UnsupportedLocalStorageException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    UnsupportedLocalStorageException.prototype = new Exception;
    /* ============================== Attributes ===================================================== */
    UnsupportedLocalStorageException.prototype.DATA_TYPE = "UnsupportedLocalStorageException";
    /* ============================== Constructors ===================================================== */
    UnsupportedLocalStorageException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }