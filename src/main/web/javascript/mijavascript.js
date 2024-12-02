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
function submenuCliente (){
    var submenu = document.getElementById("subcliente");
    if(submenu.hidden == true){
        submenu.hidden = false;
        document.querySelector("#menucliente button").style.backgroundColor="#0000";
        document.querySelector("#menucliente button").style.color="red";
    }else{
        submenu.hidden = true;
        document.querySelector("#menucliente button").style.backgroundColor="aliceblue";
        document.querySelector("#menucliente button").style.color="black";
    }

    var submenuItems = document.querySelectorAll("#subcliente button");
    for (var i = 0; i< submenuItems.length; i++){
        submenuItems[i].addEventListener("mouseover",function (){this.style.backgroundColor = "#0000"});
        submenuItems[i].addEventListener("mouseleave",function (){this.style.backgroundColor="black"});
    }

}