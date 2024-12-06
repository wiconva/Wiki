//Regresa a la barra de contenido cuando se da click en los títulos.
function showHeaderView (e) {
   var elementos = document.getElementsByTagName ("a")
   var href = "";
   var targetElement = "";
   console.log(e.srcElement.type)
   if (!(e.srcElement.type=="textarea")){
       console.log("entro al area")
       document.getElementById("header").scrollIntoView();
    }
}

//Oculata submenú cliente.
function submenuMostrar (e){
    console.log("Mostrando submenu.")
    var submenu = document.getElementById(e.fromElement.id+"Submenu");
    if(submenu.hidden == true){
        submenu.hidden = false;

        //menu.style.backgroundColor="#0000";
        //menu.style.color="red";
    }
}

function  submenuOcultar (e){
    var submenu = e.fromElement;
    if(submenu.hidden == false){
        submenu.hidden = true;
        //menu.style.backgroundColor="#0000";
        //menu.style.color="red";
        }

}