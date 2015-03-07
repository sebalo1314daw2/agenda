function HackerAttackException(param0) {
    /* ============================== Attributes ===================================================== */
    this.childFullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("Exception", "HackerAttackException");
    /* ============================== Attributes ===================================================== */
    HackerAttackException.prototype.DATA_TYPE = "HackerAttackException";
    /* ============================== Constructors ===================================================== */
    HackerAttackException.prototype.childFullConstructor = function(msg) {
        Exception.call(this, msg);
    }