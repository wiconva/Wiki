//Agrega el encabezado en cada página.
/*document.write("<nav>"
    +"<a href=\"../java/jpa.html\">Java</a>"
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
    "<a href=\"#\" ><button id='java' onclick='submenuMostrar(event)'>JAVA</button></a>"+
    "<a href=\"#\" ><button id='spring' onclick='submenuMostrar(event)'>SPRING</button></a>"+
    "<a href=\"#\" ><button id='jpa' onclick='submenuMostrar(event)'>JPA</button></a>"+
    "<a href=\"#\" ><button id='javaScript' onclick='submenuMostrar(event)'>JAVA SCRIPT</button></a>"+
    "<a href=\"#\" ><button id='gradle' onclick='submenuMostrar(event)'>GRADLE</button></a>"+
    "<a href=\"#\" ><button id='git' onclick='submenuMostrar(event)'>GIT</button></a>"+
  "</nav>"+
"</div>"
+"<div id='allsubmenus'>"+
    "<div id='javaSubmenu' hidden= 'hidden'  >"+
        "<ol>"+
            "<li><a href=\"../java/java.html#comentarios\">Tipos de comentarios.</a></li>"+
            "<li><a href=\"../java/java.html#tiposDatos\">Tipos de datos.</a></li>"+

        "</ol>"+
    "</div>"+
    "<div id='springSubmenu' hidden= 'hidden'  >"+
        "<ol>"+
            "<li><a href=\"../spring/spring.html#sfwDependencias\">SpringFW dependencias.</a></li>"+
            "<li><a href=\"../spring/spring.html#sfwContextoClasico\">SpringFW contexto clásico.</a></li>"+

        "</ol>"+
    "</div>"+
    "<div id='jpaSubmenu' hidden= 'hidden'  >"+
        "<ol>"+
            "<li><a href=\"../jpa/jpa.html#conceptosBasicos\">Conceptos Básicos.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#configuracion\">Configuración JPA y depencias.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#configuracionHibernate\">Configuración Hibernate.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#crearEntidad\">Crear entidad clase Bean.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#indiceAutoIncrementado\">Indice auto-incrementado.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#persistencia\">Persistencia, buscar y mergear una entidad.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#remover\">Remover una entidad.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#crearQueryHql\">Crear query hql.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#crearQueryHqlNombrada\">Crear query hql nombrada.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#crearQueryNativa\">Crear query nativa.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#collectionEnums\">Colecciones y enumeraciones en el Bean.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#oneToOne\">Relación uno a uno.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#oneToMany\">Relación uno a muchos.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#manyToMany\">Relación muchos a muchos bidereccional.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#criteriaQueryBetween\">Criteria Query Between.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#eventosPrePost\">Eventos pre y post entidad.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#eventosAuditEnvers\">Eventos audit-envers.</a></li>"+
            "<li><a href=\"../jpa/jpa.html#eventosInterceptoresHibernate\">Eventos interceptores Hibernate.</a></li>"+


        "</ol>"+
    "</div>"+
    "<div id='javaScriptSubmenu' hidden= 'hidden'  >"+
        "<ol>"+
            "<li><a href=\'../javascript/javascript.html#conceptosBasicos\'>Conceptos básicos.</a></li>"+
            "<li><a href=\"../javascript/javascript.html#alert\">Función Alert.</a></li>"+
            "<li><a href=\"../javascript/javascript.html#enlazarArchivoJS\">Enlazar archivos JS.</a></li>"+
        "</ol>"+
    "</div>"+
    "<div id='gradleSubmenu' hidden= 'hidden' >"+
        "<ol>"+
            "<li><a href=\'../gradle/gradle.html#archivoBuild\'>Archivo gradle.build.kts</a></li>"+
            "<li><a href=\'../gradle/gradle.html#tareaFatJar\'>Crear fat jar con las depencias.</a></li>"+
             "<li><a href=\'../gradle/gradle.html#tareaInternalJarDependencies\'>Crear jar con depencias en lib</a></li>"+
             "<li><a href=\'../gradle/gradle.html#arbolProyectoGradle\'>Arbol proyecto Gradle 'Tareas'</a></li>"+
        "</ol>"+
    "</div>"+
    "<div id='gitSubmenu' hidden= 'hidden' >"+
        "<ol>"+
            "<li><a href=\'../git/git.html#compararCambioEnSeleccion\'>Comparar una sección de código.</a></li>"+
        "</ol>"+
    "</div>"

+"</div>"
);