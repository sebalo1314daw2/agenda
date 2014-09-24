$("document").ready(function(){atTheStartOfPage();});
/**
 * generateLogo()
 * @description Procedure that is intended to generate the logo of the web.
 * @author Sergio Baena López
 * @version 1.0
 */
function generateLogo()
{
    var logo = '<a href="login.html" title="Anar a la p&agrave;gina d\'inici">';
    logo +=         '<img src="../img/logo.png" alt="Logotip" />';      
    logo +=         'Agenda de butxaca';
    logo +=    '</a>';                 
    $("#logo").append
    (
            $(logo)
    );
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
    menu     +=     '<li class="currentOptionMenu" >';
    menu     +=         '<a class="currentOptionMenu" href="login.html">Acc&eacute;s</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';
    menu     +=         '<a href="registre.html">Registre</a>';
    menu     +=     '</li>';
    menu     +=     '<li>';   
    menu     +=         '<a href="javascript:void(0)">Sobre la web</a>';  
    menu     +=     '</li>';  
    menu     +=     '<li>';                     
    menu     +=         '<a href="javascript:void(0)">Contacte</a>';                       
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