function Exception(param0) {
    /* ============================== Attributes ===================================================== */
    this.msg;               // String
    
    this.fullConstructor(param0);
}
    /* ============================== Provoke inheritance ============================================ */
    Exception.prototype = new ObjectApp;
    /* ============================== Attributes ===================================================== */
    Exception.prototype.DATA_TYPE = "Exception";
    /* ============================== Constructors ===================================================== */
    Exception.prototype.fullConstructor = function(msg) {
        this.setMsg(msg);
    }
    /* ============================== Accessors ===================================================== */
    Exception.prototype.getMsg = function(){ return this.msg; }
    
    Exception.prototype.setMsg = function(msg){ this.msg = msg; }
    /* ============================== Methods ===================================================== */
    Exception.prototype.toString = function() {
        return this.msg;
    }