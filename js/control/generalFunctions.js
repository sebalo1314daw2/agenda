$("document").ready(function(){atTheStartOfPage();});
/**
 * generateLogo()
 * @description Procedure that is intended to generate the logo of the web.
 * @author Sergio Baena López
 * @version 1.0
 * @param {String} urlWhereTheLogoRedirects the URL where the user will be redirected when he clicks
 * @param {String} urlWhereTheImageOfTheLogoIs the URL where the image of the logo is in the server
 */
function generateLogo(urlWhereTheLogoRedirects, urlWhereTheImageOfTheLogoIs)
{
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
 * @version 1.0
 */
function generateMenuLooper() {
    var menuLooper = '<a href="#menu">Anar al men&uacute;</a>';
    $("#menuLooper").append( $(menuLooper) );
}
/**
 * generateBottonPanelLooper()
 * @description Procedure that is intended to generate the botton panel's looper of the web.
 * @author Sergio Baena López
 * @version 1.0
 */
function generateBottonPanelLooper() {
    var buttonPanelLooper = '<a href="#buttonPanel">Anar a la botonera</a>';
    $("#bottonPanelLooper").append( $(buttonPanelLooper) );
}
/**
 * generateMenu()
 * @description Procedure that is intended to generate the menu of the web.
 * @author Sergio Baena López
 * @version 1.0
 */
function generateMenu()
{
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
 * @version 1.0
 */
function generateFooter()
{
    var footer =    '<p>';
    footer     +=           'Servei gratu&iuml;t que ofereix el Sergio Baena L&oacute;pez per a tothom ';
    footer     +=           'que hi vulgui.';
    footer     +=   '</p>';                 
    $("#footer").append
    (
            $(footer)
    );              
}
/**
 * generateRegisteredUserMenu()
 * @description Procedure that is intended to generate the registered user's menu
 * @author Sergio Baena López
 * @version 1.0
 */
function generateRegisteredUserMenu() {
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
 * @version 1.0
 */
function activateChosen() {
    $("select").chosen({
        search_contains : true,
        no_results_text : "No hi ha resultats que concideixen amb "
    });
}
/**
 * activateCalendar()
 * @description This procedure activates the calendar (pickadate) in the page
 * @author Sergio Baena López
 * @version 1.0
 */
function activateCalendar() {
    $(".calendar").pickadate({
        min : new Date()
    });
}
/**
 * activateLoadAnimation()
 * @description This procedure activates the load animation of the page
 * @author Sergio Baena Lopez
 * @version 16.0
 */
function activateLoadAnimation() {
    var idList = new Array("logo", "menuLooper", "body", "menu", "footer", "loadAnimation");
    // We've to add the "loading" class to several HTML tags
    for(var i = 0; i < idList.length; i++) {
        $( "#" + idList[i] ).addClass("loading");
    }
    // We've already added the "loading" class
    // Now, we've to center the load animation in the browser
    Utilities.centerElement( $("#loadAnimation") );
    // Finally, we catch the resize event for center the load animation again (if it is the case)
    $(window).resize(function(){
        var id = parseInt( $("#idOfTheResizeProcess").html() );
        clearTimeout(id);
        id = setTimeout(function(){
            Utilities.centerElement( $("#loadAnimation") );
        }, 100);
        $("#idOfTheResizeProcess").html(id);
    });
}
/**
 * deactivateLoadAnimation()
 * @description This procedure deactivates the load animation of the page
 * @author Sergio Baena Lopez
 * @version 16.0
 */
function deactivateLoadAnimation() {
    var idList = new Array("logo", "menuLooper", "body", "menu", "footer", "loadAnimation");
    // We've to remove the "loading" class to several HTML tags
    for(var i = 0; i < idList.length; i++) {
        $( "#" + idList[i] ).removeClass("loading");
    }
    // We've already removed the "loading" class
    // Finally, we've to remove the handler of the resize event
     $(window).unbind("resize");
}