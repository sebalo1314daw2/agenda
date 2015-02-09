function Page() {}
/* ============================== Provoke inheritance ============================================ */
$.provokeInheritance("ObjectApp", "Page");
/* ============================== Attributes ===================================================== */
Page.prototype.DATA_TYPE = "Page";
Page.AJAX_ERR =     "Hi ha un problema amb el servidor. Comprova que tens connexi&oacute; "     +
                    "a Internet. Si no &eacute;s aix&iacute; es tracta d'un problema nostre "   +
                    "i, per tant, prova a conectar-te una "                                     +
                    "mica m&eacute;s tard i, disculpa les mol&egrave;sties.";
Page.BOLD_TAG = new Array();
Page.BOLD_TAG["start"] = "<span class=\"fastReading\">";
Page.BOLD_TAG["end"] = "</span>";
Page.PARAGRAPH_TAG = new Array();
Page.PARAGRAPH_TAG["start"] = "<p>";
Page.PARAGRAPH_TAG["end"] = "</p>";
/* ============================== Accessors ===================================================== */
Page.getAJAX_ERR = function(){ return Page.AJAX_ERR; }
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
 * @version 17
 * @param {HTML object} element the element to center
 */
Page.centerElement = function(element) {
    var widthBrowser;
    var heightBrowser;
    var widthElement;
    var heightElement;
    // We calculates the width and the height of the browser
    if(navigator.appVersion.indexOf("MSIE") != -1) {
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
 * showErrorForUser()
 * This procedure shows the thrown exception to the user 
 * @author Sergio Baena Lopez
 * @version 17
 * @param {thrown element} exception the exception to show
 */
Page.showErrorForUser = function(exception) {
    alert(exception);
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
 * activateChosen()
 * @description This procedure activates the chosen in the page
 * @author Sergio Baena López
 * @version 17
 */
Page.activateChosen = function() {
    $("select").chosen({
        search_contains : true,
        no_results_text : "No hi ha resultats que concideixen amb "
    });
}
/**
 * activateCalendar()
 * @description This procedure activates the calendar (pickadate) in the page
 * @author Sergio Baena López
 * @version 17
 */
Page.activateCalendar = function() {
    $(".calendar").pickadate({
        min : new Date()
    });
}
/**
 * activateLoadAnimation()
 * @description This procedure activates the load animation of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
Page.activateLoadAnimation = function() {
    var idList = new Array("logo", "menuLooper", "body", "menu", "footer", "loadAnimation");
    // We've to add the "loading" class to several HTML tags
    for(var i = 0; i < idList.length; i++) {
        $( "#" + idList[i] ).addClass("loading");
    }
    // We've already added the "loading" class
    // Now, we've to center the load animation in the browser
    Page.centerElement( $("#loadAnimation") );
    // Finally, we catch the resize event for center the load animation again (if it is the case)
    $(window).resize(function(){
        var id = parseInt( $("#idOfTheResizeProcess").html() );
        clearTimeout(id);
        id = setTimeout(function(){
            Page.centerElement( $("#loadAnimation") );
        }, 100);
        $("#idOfTheResizeProcess").html(id);
    });
}
/**
 * deactivateLoadAnimation()
 * @description This procedure deactivates the load animation of the page
 * @author Sergio Baena Lopez
 * @version 17
 */
Page.deactivateLoadAnimation = function() {
    var idList = new Array("logo", "menuLooper", "body", "menu", "footer", "loadAnimation");
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