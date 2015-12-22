function Web(param0, param1, param2, param3, param4, param5, param6) {
    /* ============================== Attributes ===================================================== */
    this.id;                // Number
    this.generalInfo;       // String
    this.groupInfo;         // String
    this.groupAInfo;        // String
    this.groupBInfo;        // String
    this.footer;            // String
    this.obtainingOrigin;   // Number           0 --> DB | 1 --> local storage | 2 --> other origin
    
    this.fullConstructor(param0, param1, param2, param3, param4, param5, param6);
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("TableItem", "Web");
    /* ============================== Attributes ===================================================== */
    Web.prototype.DATA_TYPE = "Web";
    Web.NAME_LOCAL_STORAGE = Constants.getPREFIX() + Constants.getDELIMITER() + "web";
    Web.ORIGIN_DB = 0;
    Web.ORIGIN_LOCAL_STORAGE = 1;
    Web.ORIGIN_OTHERS = 2;
/* ============================== Constructors ================================================== */
    Web.prototype.fullConstructor = function (
        id,
        generalInfo,
        groupInfo, 
        groupAInfo, 
        groupBInfo, 
        footer,
        obtainingOrigin
    ) {
        this.setId(id);
        this.setGeneralInfo(generalInfo);
        this.setGroupInfo(groupInfo);
        this.setGroupAInfo(groupAInfo);
        this.setGroupBInfo(groupBInfo);
        this.setFooter(footer);
        this.setObtainingOrigin(obtainingOrigin);
    }
    /* ============================== Accessors ===================================================== */
    Web.prototype.getId = function(){ return this.id; }
    Web.prototype.getGeneralInfo = function(){ return this.generalInfo; }
    Web.prototype.getGroupInfo = function(){ return this.groupInfo; }
    Web.prototype.getGroupAInfo = function(){ return this.groupAInfo; }
    Web.prototype.getGroupBInfo = function(){ return this.groupBInfo; }
    Web.prototype.getFooter = function(){ return this.footer; }
    Web.prototype.getObtainingOrigin = function(){ return this.obtainingOrigin; }
    Web.prototype.getNAME_LOCAL_STORAGE = function(){ return Web.NAME_LOCAL_STORAGE; }
    
    Web.prototype.setId = function(id){ this.id = id; }
    Web.prototype.setGeneralInfo = function(generalInfo){ this.generalInfo = generalInfo; }
    Web.prototype.setGroupInfo = function(groupInfo){ this.groupInfo = groupInfo; }
    Web.prototype.setGroupAInfo = function(groupAInfo){ this.groupAInfo = groupAInfo; }
    Web.prototype.setGroupBInfo = function(groupBInfo){ this.groupBInfo = groupBInfo; }
    Web.prototype.setFooter = function(footer){ this.footer = footer; }
    Web.prototype.setObtainingOrigin = function(obtainingOrigin){ this.obtainingOrigin = obtainingOrigin; }
    /* =========================== Static methods ================================================= */
    /**
     * obtain()
     * @description This function obtains the web object from local storage (if there is local storage)
     * or from database (otherwise)
     * @author Sergio Baena Lopez
     * @version 16.0
     * @throws {AjaxException} if Ajax causes an error 
     * @param {String} serverPath the server's path for we do the Ajax's call
     * @param {Function} beforeSendFunction the function which is going to execute before of the data's
     * sending
     * @param {Function} completeFunction the function which is going to execute when the Ajax's call 
     * completed
     * @param {String} errMsg the message of AjaxException if it throws 
     * @return {Web}  the web object from the local storage/database
     */
    Web.obtain = function(serverPath, beforeSendFunction, completeFunction, errMsg) {
        // we check if there are local data
        var web;
        try {
            if( Web.areThereLocalData() ) {  // there are local data
               web = Web.obtainFromLocalStorage();
            } else { // there aren't local data --> we obtain them from DB
                web = Web.obtainFromDB(serverPath, beforeSendFunction, completeFunction, errMsg);
            }
        } catch(e) {
            if(e.getDATA_TYPE == undefined) {  // thrown  excepcion --> System exception
                throw e;
            } else if(e.getDATA_TYPE() == "ExpiredLocalDataException") { // it throws ExpiredLocalDataException
                // we've to obtain the web object from database
                web = Web.obtainFromDB(serverPath, beforeSendFunction, completeFunction, errMsg);
            } else { // thrown exception --> a Exception object not expected 
                throw e;
            }
        }
        return web;
    }
    /**
     * obtainFromDB()
     * @description This function obtains the web object from the database
     * @author Sergio Baena Lopez
     * @version 16.0
     * @throws {AjaxException} if Ajax causes an error 
     * @param {String} serverPath the server's path for we do the Ajax's call
     * @param {Function} beforeSendFunction the function which is going to execute before of the data's
     * sending
     * @param {Function} completeFunction the function which is going to execute when the Ajax's call 
     * completed
     * @param {String} errMsg the message of AjaxException if it throws 
     * @return {Web}  the web object from the database
     */
    Web.obtainFromDB = function(serverPath, beforeSendFunction, completeFunction, errMsg) {
        var outputData;
        $.ajax({
            url: serverPath,
            type: "POST", 
            async: false,
            data: "action=0",
            dataType: "json",
            beforeSend: function (xhr) {
                beforeSendFunction();
            },
            complete: function (xhr, status) {
                completeFunction();
            },
            success: function (response) {
                outputData = response;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                throw new AjaxException(errMsg);
            }	
        });
        // We become outputData to a Javascript object
        var web = new Web (
            outputData.id,
            outputData.generalInfo, 
            outputData.groupInfo, 
            outputData.groupAInfo,
            outputData.groupBInfo,
            outputData.footer,
            0
        );
        return web;
    }
    /**
     * obtainFromLocalStorage()
     * @description This function obtains the web object from local storage. If the data have expired 
     * (> 7 days), we throw an exception
     * @author Sergio Baena Lopez
     * @version 16.0
     * @throws {ExpiredLocalDataException} if the local data has expired (> 7 days) 
     * @return {Web} the web object from local storage
     */
    Web.obtainFromLocalStorage = function() {
        var dataArray = localStorage.getItem(Web.NAME_LOCAL_STORAGE);
        dataArray = JSON.parse(dataArray);
        // We check if the local data have already expired
        var todayDate = new Date().getTime();
        var creationLocalStorageDate = dataArray[0]["creationDate"];
        var EXPIRATION_TIME = 604800000; // 7 days (in ms) 
        if(todayDate - creationLocalStorageDate > EXPIRATION_TIME) { // the local data have already expired
            throw new ExpiredLocalDataException("The local data about web have already expired");
        }
        // The local data haven't expired yet --> we obtain the web object
        var web = new Web (
            dataArray[0]["web"].id,
            dataArray[0]["web"].generalInfo,
            dataArray[0]["web"].groupInfo,
            dataArray[0]["web"].groupAInfo,
            dataArray[0]["web"].groupBInfo,
            dataArray[0]["web"].footer,
            1
        );
        return web;
    }
    /**
     * areThereLocalData()
     * This function indicates if there're  local data about the web (object) or not
     * @author Sergio Baena Lopez
     * @version 16.0
     * @return {boolean}  if there're  local data about the web (object) or not
     */
    Web.areThereLocalData = function() {
        var isThere = true;
        if( typeof(Storage) == "undefined" || localStorage.getItem(Web.NAME_LOCAL_STORAGE) == null) {
            // there isn't local storage
            isThere = false;
        } 
        return isThere;
    }    
    /* =========================== Non-static methods ================================================= */
    /**
     * toHTMLTags()
     * @description This procedure converts the "negreta" tags ("<negreta></negreta>") to HTML tags.
     * Also, it converts the "<parragraf></parragraf>" tags.
     * @author Sergio Baena Lopez
     * @version 17
     * @param {String} negretaStartTagToReplace the HTML element which replaces <negreta>
     * @param {String} negretaEndTagToReplace the HTML element which replaces </negreta>
     * @param {String} parragrafStartTagToReplace the HTML element which replaces <parragraf>
     * @param {String} parragrafEndTagToReplace the HTML element which replaces </parragraf>
     */
    Web.prototype.toHTMLTags = function (
        negretaStartTagToReplace,
        negretaEndTagToReplace,
        parragrafStartTagToReplace, 
        parragrafEndTagToReplace
    ) {
        var attrList = new Array("generalInfo", "groupInfo", "groupAInfo", "groupBInfo", "footer");
        for(var i = 0; i < attrList.length; i++) {
            eval("this." + attrList[i] + " = this." +  attrList[i] + ".replaceAll('<negreta>', '" + negretaStartTagToReplace + "');");
            eval("this." + attrList[i] + " = this." +  attrList[i] + ".replaceAll('</negreta>', '" + negretaEndTagToReplace + "');");
        }
        // Now, we convert the "<parragraf></parragraf>" tags to "<p></p>" in general information 
        eval("this." + attrList[0] + " = this." +  attrList[0] + ".replaceAll('<parragraf>', '" + parragrafStartTagToReplace + "');");
        eval("this." + attrList[0] + " = this." +  attrList[0] + ".replaceAll('</parragraf>', '" + parragrafEndTagToReplace + "');");
    }
    /**
     * storeInLocalStorage()
     * @description This procedure stores this object (and its timestamp) in local storage 
     * @author Sergio Baena Lopez
     * @version 16.0
     * @throws {UnsupportedLocalStorageException} if the local storage isn't sopported for browser
     */
    Web.prototype.storeInLocalStorage = function() {
       // We check if the browser supports the local storage
       if( typeof(Storage) == "undefined" ) { // Unsupported local storage
           throw new UnsupportedLocalStorageException("The browser doesn't support the local storage (HTML5)");
       }
       // The browser supports local storage --> we store this object in local storage
       var newEntry = new Object();
       newEntry["web"] = this;
       newEntry["creationDate"] = new Date().getTime();
       newEntry = jQuery.makeArray(newEntry);
       localStorage.setItem( Web.NAME_LOCAL_STORAGE, JSON.stringify(newEntry) );
    }
    /**
     * storeIfItIsRequired()
     * @description This procedure stores this object if it is required. It's required when the web object
     * comes from database.
     * @author Sergio Baena Lopez
     * @version 16.0
     * @throws {UnsupportedLocalStorageException} if the local storage isn't sopported for browser
     */
    Web.prototype.storeIfItIsRequired = function() {
        // We check if the web object comes from DB
        if(this.obtainingOrigin == Web.ORIGIN_DB) { // the web object comes from DB --> we store this object
            this.storeInLocalStorage();
        }
    }