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