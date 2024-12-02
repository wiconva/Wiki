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

// Ajusta el tamaño de de la barra de contenido 'aside' en función del contenido de la 'section'.
function fixAsideHeight(){
    var section = document.getElementById("section");
    var aside = document.getElementById("aside");
    aside.style.height = section.clientHeight+"px"  ;
}

//Oculata submenú cliente.
function submenuMostrar (e){
    var submenu = document.getElementById(e.fromElement.id+"Submenu");
    console.log(submenu)

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