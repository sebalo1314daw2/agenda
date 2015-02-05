function Constants(){}
    /* ============================== Provoke inheritance ============================================ */
    Constants.prototype = new ObjectApp;
    /* =========================== Static attributes ================================================ */
    Constants.PREFIX = "adb";
    Constants.DELIMITER = "_";
    /* =========================== Non-static attributes ================================================ */
    Constants.prototype.DATA_TYPE = "Constants";
    /* ========================= Static accessors =====+============================================= */
    Constants.getPREFIX = function(){ return Constants.PREFIX; }
    Constants.getDELIMITER = function(){ return Constants.DELIMITER; }