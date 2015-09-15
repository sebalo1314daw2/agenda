function Page() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("ObjectApp", "Page");
/* ============================== Attributes ===================================================== */
Page.prototype.DATA_TYPE = "Page";
Page.AJAX_ERR =     "Hi ha un problema amb el servidor. Comprova que tens connexi&oacute; "     +
                    "a Internet. Si no &eacute;s aix&iacute; es tracta d'un problema nostre "   +
                    "i, per tant, prova a conectar-te una "                                     +
                    "mica m&eacute;s tard i, disculpa les mol&egrave;sties.";
Page.HACKERS_WARNING = "El servidor valida qualsevol entrada de dades. No fagis tonteries.";
Page.BOLD_TAG = new Array();
Page.BOLD_TAG["start"] = "<span class=\"fastReading\">";
Page.BOLD_TAG["end"] = "</span>";
Page.PARAGRAPH_TAG = new Array();
Page.PARAGRAPH_TAG["start"] = "<p>";
Page.PARAGRAPH_TAG["end"] = "</p>";
/* ============================== Accessors ===================================================== */
Page.getAJAX_ERR = function(){ return Page.AJAX_ERR; }
Page.getHACKERS_WARNING = function(){ return Page.HACKERS_WARNING; }
Page.getBOLD_TAG = function(key){ return Page.BOLD_TAG[key]; }
Page.getPARAGRAPH_TAG = function(key){ return Page.PARAGRAPH_TAG[key]; }
/* ============================== Static methods ================================================= */
/**
 * openPopup()
 * This procedure opens a popup in the middle of the screen. Its URL, width and height are going to specified.
 * @author Sergio Baena Lopez
 * @version 17
 * @param {String} url the popup's URL
 */
Page.openPopup = function(url) {
    var WIDTH = 937;
    var HEIGHT = 581;
    var positionY = screen.height/2 - HEIGHT/2;
    var positionX = screen.width/2 - WIDTH/2;
    window.open(
        url                     ,
        ""                      ,
        "left="             + 
        positionX           +
        ", top="            +
        positionY           +
        ", width="          +
        WIDTH               +
        ", height="         + 
        HEIGHT              +
        ", scrollbars=yes"
    );
}
/**
 * centerElement()
 * This procedure centers the specified element in the web
 * @author Sergio Baena Lopez
 * @version 18.1
 * @param {HTML object} element the element to center
 */
Page.centerElement = function(element) {
    var widthBrowser;
    var heightBrowser;
    var widthElement;
    var heightElement;
    // We calculates the width and the height of the browser
    if( ViewUtilities.isIE() ) {
        // The browser is IE
        widthBrowser = document.body.offsetWidth;
        heightBrowser = document.body.offsetHeight;
    } else {
        // The browser isn't IE
        widthBrowser = window.innerWidth;
        heightBrowser = window.innerHeight;
    }
    // The width and the height of the browser already is calculated
    // Now, we calculates the width and the height of the specified element
    widthElement = $(element).outerWidth();
    heightElement = $(element).outerHeight();
    // The width and the height of the element already is calculated
    // We calculates the top and the left properties and then we set them
    $(element).css({
        top:    Math.round( (heightBrowser/2 - heightElement/2) ) + "px",
        left:   Math.round( (widthBrowser/2 - widthElement/2)   ) + "px"
    });
}
/**
 * alert()
 * This procedure shows a message to the user ( it calls the "toString()" method ) 
 * @author Sergio Baena Lopez
 * @version 21.0
 * @param {Object []} msgList the messages to show
 */
Page.alert = function(msgList) {
   // We add the specified messages to the alert
   var divMsgList = $("#msgList");
   for(var i = 0; i < msgList.length; i++) {
       var pMsg = "<p class='msg'>" + msgList[i] + "</p>";
       $(divMsgList).append( $(pMsg) );
   } // We've already added all the  specified messages
   // We add the "alerting" classes
   var idList = new Array (
        "logo",
        "menuLooper",
        "title",
        "text",
        "menu",
        "footer", 
        "img",
        "alert",
        "img",
        "issue",
        "message",
        "email",
        "labelImageProfile",
        "name",
        "surnames",
        "alias",
        "password",
        "confirmationPassword",
        "labelCookieAccept",
        "labelNoCloseSession",
        "button"
    );
    for(i = 0; i < idList.length; i++) {
        $("#" + idList[i]).addClass("alerting");
    }
    // Finally, we center the alert
    Page.centerAlert();
}
/**
 * isAlertActive()
 * @description This function indicates if the alert is active or not. The alert is active when #alert
 * has the "alerting" class
 * @author Sergio Baena Lopez
 * @version 19.0
 * @return {boolean} if the alert is active or not
 */
Page.isAlertActive = function() {
    return $("#alert").hasClass("alerting");
}
/**
 * centerElementByWidthWithRespectToWebContainer()
 * This procedure centers the specified element by the width with respect to web container 
 * @author Sergio Baena Lopez
 * @version 18.1
 * @param {HTML object} element the element to center by the width with respect to web container 
 */
Page.centerElementByWidthWithRespectToWebContainer = function(element) {
    var widthBrowser;
    var widthWebContainer;
    var widthElement;
    // We calculates the width of the browser
    if( ViewUtilities.isIE() ) {
        // The browser is IE
        widthBrowser = document.body.offsetWidth;
    } else {
        // The browser isn't IE
        widthBrowser = window.innerWidth;
    }
    // We check if the web container's width corresponds the browser's width
    if(widthBrowser > 1024) {
        widthWebContainer = 1024;
    } else {
        widthWebContainer = widthBrowser;
    } // We've already calculated the width of the web container
    // Now, we calculates the width of the specified element
    widthElement = $(element).outerWidth();
    // The width of the element already is calculated
    // We calculates the left property and then we set it
    $(element).css("left", Math.round( (widthWebContainer/2 - widthElement/2) ) + "px");
}
/**
 * generateLogo()
 * @description Procedure that is intended to generate the logo of the web.
 * @author Sergio Baena López
 * @version 17
 * @param {String} urlWhereTheLogoRedirects the URL where the user will be redirected when he clicks
 * @param {String} urlWhereTheImageOfTheLogoIs the URL where the image of the logo is in the server
 */
Page.generateLogo = function(urlWhereTheLogoRedirects, urlWhereTheImageOfTheLogoIs) {
    var logo = '<a href="' + urlWhereTheLogoRedirects + '" title="Anar a la p&agrave;gina d\'inici">';
        logo +=         '<img src="' + urlWhereTheImageOfTheLogoIs + '" alt="Logotip" />';   
    logo +=         'Agenda de butxaca';
    logo +=    '</a>';                 
    $("#logo").append
    (
            $(logo)
    );
}
/**
 * generateMenuLooper()
 * @description Procedure that is intended to generate the menu's looper of the web.
 * @author Sergio Baena López
 * @version 17
 */
Page.generateMenuLooper = function() {
    var menuLooper = '<a href="#menu">Anar al men&uacute;</a>';
    $("#menuLooper").append( $(menuLooper) );
}
/**
 * generateBottonPanelLooper()
 * @description Procedure that is intended to generate the botton panel's looper of the web.
 * @author Sergio Baena López
 * @version 17
 */
Page.generateBottonPanelLooper = function() {
    var buttonPanelLooper = '<a href="#buttonPanel">Anar a la botonera</a>';
    $("#bottonPanelLooper").append( $(buttonPanelLooper) );
}
/**
 * generateMenu()
 * @description Procedure that is intended to generate the menu of the web.
 * @author Sergio Baena López
 * @version 17
 */
Page.generateMenu = function() {
    var menu =  "<ul>";
    menu     +=     '<li>';
    menu     +=         '<a href="#webContainer">Pujar</a>';
    menu     +=     '</li>';
    menu     +=     '<li class="currentOptionMenu" >';
    menu     +=         '<a class="currentOptionMenu" href="login.html">Acc&eacute;s</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';
    menu     +=         '<a href="registre.html">Registre</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';   
    menu     +=         '<a href="sobre_la_web.html">Info</a>';  
    menu     +=     '</li>';  
    menu     +=     '<li>';                     
    menu     +=         '<a href="contacte.html">Contacte</a>';                       
    menu     +=     '</li>';                          
    menu     += '</ul>';                   
    $("#menu").append
    (
            $(menu)
    );              
}
/**
 * generateFooter()
 * @description Procedure that is intended to generate the footer of the web.
 * @author Sergio Baena López
 * @version 18.0
 * @param {String} content the footer's content 
 */
Page.generateFooter = function(content) {
    var footer =    Page.PARAGRAPH_TAG["start"] + content + Page.PARAGRAPH_TAG["end"];                 
    $("#footer").append( $(footer) );              
}
/**
 * generateRegisteredUserMenu()
 * @description Procedure that is intended to generate the registered user's menu
 * @author Sergio Baena López
 * @version 17
 */
Page.generateRegisteredUserMenu = function() {
    var menu =  "<ul>";
    menu     +=     '<li>';
    menu     +=         '<a href="#webContainer">Pujar</a>';
    menu     +=     '</li>';
    menu     +=     '<li class="currentOptionMenu" >';
    menu     +=         '<a class="currentOptionMenu" href="../agenda/">Agenda</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';
    menu     +=         '<a href="../usuari/">Usuari</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';   
    menu     +=         '<a href="../amics/">Amics</a>';  
    menu     +=     '</li>';  
    menu     +=     '<li>';                     
    menu     +=         '<a href="../grups/">Grups</a>';                       
    menu     +=     '</li>';
    menu     +=     '<li>';                     
    menu     +=         '<a href="../../usuari_no_registrat/sobre_la_web.html">Info</a>';                       
    menu     +=     '</li>';
    menu     +=     '<li>';                     
    menu     +=         '<a href="../../usuari_no_registrat/contacte.html">Contacte</a>';                       
    menu     +=     '</li>';
    menu     +=     '<li>';                     
    menu     +=         '<a href="javascript:void(0)">Tancar</a>';                       
    menu     +=     '</li>';
    menu     += '</ul>';                   
    $("#menu").append (
            $(menu)
    );              
}
/**
 * activateLoadAnimation()
 * @description This procedure activates the load animation of the page
 * @author Sergio Baena Lopez
 * @version 21.0
 */
Page.activateLoadAnimation = function() {
    var idList = new Array (
        "logo",
        "menuLooper",
        "title",
        "alert",
        "text",
        "menu",
        "footer", 
        "img",
        "loadAnimation",
        "issue",
        "message",
        "email",
        "labelImageProfile",
        "name",
        "surnames",
        "alias",
        "password",
        "confirmationPassword",
        "labelCookieAccept",
        "labelNoCloseSession",
        "button"
    );
    // We've to add the "loading" class to several HTML tags
    for(var i = 0; i < idList.length; i++) {
        $( "#" + idList[i] ).addClass("loading");
    }
    // We've already added the "loading" class
    // Now, we've to center the load animation in the browser
    Page.centerLoadAnimation();
}
/**
 * deactivateLoadAnimation()
 * @description This procedure deactivates the load animation of the page
 * @author Sergio Baena Lopez
 * @version 19.0
 */
Page.deactivateLoadAnimation = function() {
    var idList = new Array (
        "logo",
        "menuLooper",
        "title",
        "alert",
        "text",
        "menu",
        "footer", 
        "img",
        "loadAnimation",
        "issue",
        "message",
        "email",
        "labelImageProfile",
        "name",
        "surnames",
        "alias",
        "password",
        "confirmationPassword",
        "labelCookieAccept",
        "labelNoCloseSession",
        "button"
    );
    // We've to remove the "loading" class to several HTML tags
    for(var i = 0; i < idList.length; i++) {
        $( "#" + idList[i] ).removeClass("loading");
    }
    // We've already removed the "loading" class
    // Finally, we've to remove the handler of the resize event
     $(window).unbind("resize");
}
/**
 * showErrorForDeveloper()
 * @description This procedure shows the specified exception for the developer
 * @author Sergio Baena Lopez
 * @version 17
 * @param {thrown element} exception the exception to show
 */
Page.showErrorForDeveloper = function(exception) {
    console.error(exception);
}
/**
 * generateText()
 * @description This procedure inputs the specified text in the page (id=text)
 * @author Sergio Baena Lopez
 * @version 18.0
 * @param {String} content the text to input
 */
Page.generateText = function(content) {
    $("#text").html(content);
}
/**
 * centerLoadAnimation()
 * @description This procedure centers the load animation in the page. After, it checks if the load 
 * animation is activated.
 * @author Sergio Baena Lopez
 * @version 18.1
 */
Page.centerLoadAnimation = function() {
    // We check if #loadAnimation has the "loading" class
    var divLoadAnimation = $("#loadAnimation");
    if( $(divLoadAnimation).hasClass("loading") ) { // We center the load animation
        Page.centerElement( $(divLoadAnimation) );
    }
}
/**
 * centerAlert()
 * @description This procedure centers the alert in the page. After, it checks if the alert is activated.
 * @author Sergio Baena Lopez
 * @version 18.1
 */
Page.centerAlert = function() { 
    // We check if #alert has the "alerting" class
    var divAlert = $("#alert");
    if( $(divAlert).hasClass("alerting") ) { // We center the alert
        // We check if the alert must be scrolling or not
        if( ViewUtilities.isHigherThanBrowser( $(divAlert) ) ) {
            // The alert is higher than browser --> the alert must be scrolling
            // We add the "scrolling" class to the alert
            $(divAlert).addClass("scrolling");
            // We center the alert by the width with respect to web container
            Page.centerElementByWidthWithRespectToWebContainer(divAlert);
        } else {
            // The browser is higher than the alert --> the alert is normal
            // We must remove the "scrolling" class 
            $(divAlert).removeClass("scrolling");
            // We center the alert normally
            Page.centerElement(divAlert);
        }
    }
}
/**
 * centerConfirm()
 * @description This procedure centers the confirm in the page. After, it checks if the confirm is 
 * activated.
 * @author Sergio Baena Lopez
 * @version 18.1
 */
Page.centerConfirm = function() { 
    // TODO
}
/**
 * obtainIdOfTheCenteredProcess()
 * @description This function obtains the id of the centered process (it's written in hidden data)
 * @author Sergio Baena Lopez
 * @version 18.1
 * @return {Number} the id of the centered process
 */
Page.obtainIdOfTheCenteredProcess = function() {
    return parseInt( $("#idOfTheCenteredProcess").html() );
}
/**
 * storeIdOfTheCenteredProcess()
 * @description This procedure stores the id of the centered process (it's in hidden data)
 * @author Sergio Baena Lopez
 * @version 18.1
 * @param {Number} id the id of the centered process to store
 */
Page.storeIdOfTheCenteredProcess = function(id) {
    $("#idOfTheCenteredProcess").html(id);
}
/**
 * addResizeEvent()
 * @description This procedure adds the resize event which is associated to the page
 * @author Sergio Baena Lopez
 * @version 19.0
 * @param {Function} handler the handler of the resize event
 */
Page.addResizeEvent = function(handler) {
      window.onresize = handler;
}
/**
 * addReadyEvent()
 * @description This procedure adds the ready event which is associated to the page
 * @author Sergio Baena Lopez
 * @version 18.1
 * @param {Function} handler the handler of the ready event
 */
Page.addReadyEvent = function(handler) {
    $(document).ready(handler);
}
/**
 * closeAlert()
 * @description This procedure closes the alert of the page
 * @author Sergio Baena Lopez
 * @version 21.0
 */
Page.closeAlert = function() {
    // We remove the alerting class
    var idList = new Array (
       "logo",
        "menuLooper",
        "title",
        "text",
        "menu",
        "footer", 
        "img",
        "alert",
        "img",
        "issue",
        "message",
        "email",
        "labelImageProfile",
        "name",
        "surnames",
        "alias",
        "password",
        "confirmationPassword",
        "labelCookieAccept",
        "labelNoCloseSession",
        "button"
    );
    for(var i = 0; i < idList.length; i++) {
        $("#" + idList[i]).removeClass("alerting");
    }
    // We remove the scrolling class
    $("#alert").removeClass("scrolling");
    // We remove the list of messages
    $("#msgList").empty();
}