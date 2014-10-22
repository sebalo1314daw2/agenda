$("document").ready(function(){atTheStartOfPage();});
/**
 * generateLogo()
 * @description Procedure that is intended to generate the logo of the web.
 * @author Sergio Baena López
 * @version 1.0
 * @param {String} url the URL where the user will be redirected when he clicks
 */
function generateLogo(url)
{
    var logo = '<a href="' + url + '" title="Anar a la p&agrave;gina d\'inici">';
    logo +=         '<img src="../../../img/logo.png" alt="Logotip" />';      
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
    menu     +=         '<a class="currentOptionMenu" href="javascript:void(0)">Agenda</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';
    menu     +=         '<a href="javascript:void(0)">Usuari</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';   
    menu     +=         '<a href="javascript:void(0)">Amics</a>';  
    menu     +=     '</li>';  
    menu     +=     '<li>';                     
    menu     +=         '<a href="javascript:void(0)">Grups</a>';                       
    menu     +=     '</li>';
    menu     +=     '<li>';                     
    menu     +=         '<a href="../usuari_no_registrat/sobre_la_web.html">Info</a>';                       
    menu     +=     '</li>';
    menu     +=     '<li>';                     
    menu     +=         '<a href="../usuari_no_registrat/contacte.html">Contacte</a>';                       
    menu     +=     '</li>';
    menu     +=     '<li>';                     
    menu     +=         '<a href="javascript:void(0)">Tancar</a>';                       
    menu     +=     '</li>';
    menu     += '</ul>';                   
    $("#menu").append (
            $(menu)
    );              
}