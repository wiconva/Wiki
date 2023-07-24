//Regresa a la barra de contenido cuando se da click en los títulos.
function showHeaderView (e) {
   var evento = e || window.event;
   var id = evento.target.id;
   var elementos = document.getElementsByTagName ("a")
   var href = "";
   var targetElement = "";
   for (var i=0; i<elementos.length; i++){
        href = elementos[i].getAttribute("href");
        if (href.includes(("#"+id)) && id != ""){
            targetElement= elementos[i];
        }
   }

   if(targetElement == ""){
        document.getElementById("header").scrollIntoView();
   }else {
        targetElement.scrollIntoView();
   }
}

// Ajusta el tamaño de de la barra de contenido 'aside' en función del contenido de la 'section'.
function fixAsideHeight(){
    var section = document.getElementById("section");
    var aside = document.getElementById("aside");
    aside.style.height = section.clientHeight+"px"  ;
}