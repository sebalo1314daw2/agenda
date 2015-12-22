function Image(param0, param1) {
    /* ============================== Attributes ===================================================== */
    this.id;                            // Number
    this.extension;                     // String
    this.isValid;                       // boolean
    this.deadlineValidation;            // Date
    this.source;                        // File
    this.width;                         // Number
    
    if(param0 != undefined && param1 == undefined) { // new Image(source)
        this.sourceConstructor(param0); 
    } else { // new Image(source, width)
        this.sourceAndWidthConstructor(param0, param1);
    }
}
    /* ============================== Provoke inheritance ============================================ */
    $.provokeInheritance("TableItem", "Image");
    /* ============================== Attributes ===================================================== */
    Image.prototype.DATA_TYPE = "Image";
    /* ============================== Constructors ================================================== */
    Image.prototype.sourceConstructor = function(source) {
        this.setSource(source);
    }
    
    Image.prototype.sourceAndWidthConstructor = function(source, width) {
        this.sourceConstructor(source);
        this.setWidth(width);
    }
    /* ============================== Accessors ===================================================== */
    Image.prototype.getId = function(){ return this.id; }
    Image.prototype.getExtension = function(){ return this.extension; }
    Image.prototype.isIsValid = function(){ return this.isValid; }
    Image.prototype.getDeadlineValidation = function(){ return this.deadlineValidation; }
    Image.prototype.getSource = function(){ return this.source; }
    Image.prototype.getWidth = function(){ return this.width; }
    
    Image.prototype.setId = function(id){ this.id = id; }
    Image.prototype.setExtension = function(extension){ this.extension = extension; }
    Image.prototype.setIsValid = function(isValid){ this.isValid = isValid; }
    Image.prototype.setDeadlineValidation = function(deadlineValidation) {
        this.deadlineValidation = deadlineValidation; 
    }
    Image.prototype.setSource = function(source){ this.source = source; }
    Image.prototype.setWidth = function(width){ this.width = width; }
    /* =========================== Methods ================================================= */
    /**
     * isValid()
     * @description This function indicates if the image is valid or not. If the message isn't valid,
     * it's going to indicate the invalid attributes.
     * @author Sergio Baena Lopez
     * @version 21.0
     * @return {Object[]} 
     * ["isValid"] {boolean} if the image is valid or not
     * ["invalidAttributesList"] {String[]} the list of the invalid attributes 
     */
    Image.prototype.isValid = function() {
        var validationData = new Array();
        validationData["isValid"] = true; 
        validationData["invalidAttributesList"] = new Array();
        // Validation of the source (wasSelected)
        if( !Utilities.wasFileSelected(this.source) ) { // source (wasSelected) is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("source-wasSelected");
        // Validation of the source (type)
        } else if( !Utilities.isValidTypeImage(this.source.type) ) { // source (type) is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("source-type");
        // Validation of the width 
        } else if( !Utilities.isValidWidthImage(this.width) ) { // width is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("width");
        // Validation of the source (size) 
        } else if( !Utilities.isValidSizeImage(this.source.size) ) { // source (size) is invalid
            validationData["isValid"] = false;
            validationData["invalidAttributesList"].push("source-size");
        }
        // The validation was finished
        return validationData; 
    }
    /**
     * obtainURLFromSource()
     * @description This procedure obtains the image's URL from source. The function which will use the
     * obtained URL will be specified.
     * @author Sergio Baena Lopez
     * @version 21.0    
     * @throws {SourceIsNotImageException} if the source isn't an image
     * @throws {UnsupportedFileToolsException} if the FileReader object isn't supported
     * @throws {ImageReadingException} if the image's reading occurs an error 
     * @param {Function} handler the function which will use the obtained URL (it'll be transfer by
     * parameter)
     */
    Image.prototype.obtainURLFromSource = function(handler) {
        if( !Utilities.isValidTypeImage(this.source.type) ) { // it isn't an image
            throw new SourceIsNotImageException (
                "Error. The source isn't an image. The source's type is " + this.source.type
            );
        }
        if(window.FileReader == undefined) { // the FileReader object isn't supported
            throw new UnsupportedFileToolsException("Error. Your browser doesn't sopport the FileReader object");
        } // The browser supports the FileReader object
        var reader = new FileReader();
        reader.onloadend = function() {
            handler(this.result);
        };
        reader.onerror = function() {
            throw new ImageReadingException (
                "Error. The image couldn't be read. Error's description: " + FileReader.error.name
            );
        };
        reader.readAsDataURL(this.source);
    }
    /**
     * toFormData()
     * @description This function convert this image to an form data object 
     * @author Sergio Baena Lopez
     * @version 21.0  
     * @throws {UnsupportedFileToolsException} if the FormData object isn't supported 
     * @return {FormData} the image to form data 
     */
    Image.prototype.toFormData = function() {
        if(window.FormData  == undefined) { // the FormData object isn't supported
            throw new UnsupportedFileToolsException("Error. Your browser doesn't sopport the FormData object");
        } // The browser supports the FormData object
        
        // We append all its attributes into the FormData object
        var formData = new FormData();
        
        formData.append("source" + this.DATA_TYPE, this.source);
        
        return formData;
    }