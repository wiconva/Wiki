//Agrega el encabezado en cada página.
/*document.write("<nav>"
    +"<a href=\"../java/java.html\">Java</a>"
    +"<a href=\"../html/html.html\">HTML</a>"
    +"<a href=\"../css/css.html\">CSS</a>"
    +"<a href=\"../javascript/javascript.html\">Java Script</a>"
    +"<a href=\"../cmd/cmd.html\">CMD</a>"
    +"<a href=\"../maven/maven.html\">Maven</a>"
    +"<a href=\"../testing/testing.html\">Testing</a>"
    +"<a href=\"../testing/testing.html\">Testing</a>"
    +"</nav>");*/

document.write("<div>"+
" <nav>"+
    "<a href=\"../java/java.html\" id='java'><button onmouseover='submenuMostrar(event)'>JAVA</button></a>"+
    "<a href=\"../javascript/javascript.html\" id='javaScript'><button onmouseover='submenuMostrar(event)'>JAVA SCRIPT</button></a>"+
    "<a href=\"../gradle/gradle.html\" id='gradle'><button onmouseover='submenuMostrar(event)'>GRADLE</button></a>"+
  "</nav>"+
"</div>"+
    "<div id='javaSubmenu' hidden= 'hidden' onmouseleave='submenuOcultar(event)' >"+
        "<ol>"+
            "<li><a href=\"../java/java.html#conceptosBasicos\">Conceptos Básicos.</a></li>"+
            "<li><a href=\"../java/java.html#configuracion\">Configuración.</a></li>"+
        "</ol>"+
    "</div>"+
    "<div id='javaScriptSubmenu' hidden= 'hidden' onmouseleave='submenuOcultar(event)' >"+
        "<ol>"+
            "<li><a href=\'../javascript/javascript.html#conceptosBasicos\'>Conceptos básicos.</a></li>"+
            "<li><a href=\"../javascript/javascript.html#alert\">Función Alert.</a></li>"+
            "<li><a href=\"../javascript/javascript.html#enlazarArchivoJS\">Enlazar archivos JS.</a></li>"+
        "</ol>"+
    "</div>"+
    "<div id='gradleSubmenu' hidden= 'hidden' onmouseleave='submenuOcultar(event)' >"+
        "<ol>"+
            "<li><a href=\'../gradle/gradle.html#archivoBuild\'>Archivo gradle.build.kts</a></li>"+
            "<li><a href=\'../gradle/gradle.html#tareaFatJar\'>Crear fat jar con las depencias.</a></li>"+
             "<li><a href=\'../gradle/gradle.html#tareaInternalJarDependencies\'>Crear jar con depencias en lib</a></li>"+
             "<li><a href=\'../gradle/gradle.html#arbolProyectoGradle\'>Arbol proyecto Gradle 'Tareas'</a></li>"+
        "</ol>"+
    "</div>"
);