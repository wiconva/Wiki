//Regresa a la barra de contenido cuando se da click en los títulos.
function showHeaderView (e) {
   if (!(e.srcElement.type=="textarea")){
       document.getElementById("header").scrollIntoView();
    }
}

//Oculata submenú cliente.
function submenuMostrar (e){

    var allMenu = document.getElementsByTagName("button");
    for (var i=0; i<allMenu.length ; i++){
        allMenu.item(i).style.color = "white";
        document.getElementById(allMenu.item(i).id+"Submenu").hidden=true;
    }

    var menu = document.getElementById(e.srcElement.id)
    var submenu =document.getElementById(e.srcElement.id+"Submenu");
    if(submenu.hidden == true){
        submenu.hidden = false;;
        menu.style.color="red";
    }
}

function  submenuOcultar (){
    var allsubmenus = document.getElementById("allsubmenus");
    if(allsubmenus.hidden == false){
        allsubmenus.hidden = true;
        }
}