function AjaxException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("Exception", "AjaxException");
    /* ============================== Attributes ===================================================== */
    AjaxException.prototype.DATA_TYPE = "AjaxException";
    /* ============================== Constructors ===================================================== */
    AjaxException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }