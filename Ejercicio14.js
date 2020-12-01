var object = new Object();

object.pantallaCompleta = function(){   //Funciona a partir del segundo click
    if (document.fullscreenEnabled) {
			
		var btn = document.getElementById("pantallaCompleta");
			
        btn.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                btn.innerText = "Pantalla completa";
            } else {
                btn.innerText = "Salir pantalla completa";
            }
        });
        
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
	}
}

object.leerArchivoTexto=function(files) 
{
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = 'bold 30px sans-serif';

    var archivo = files[0];
   
    var ext = archivo.name.substr(archivo.name.lastIndexOf('.') + 1);
    
    var archivo = files[0];
    var nombre = document.getElementById("nombreArchivo");
    var tamaño = document.getElementById("tamañoArchivo");
    var tipo = document.getElementById("tipoArchivo");
    var ultima = document.getElementById("ultimaModificacion");
    var contenido = document.getElementById("contenidoArchivo");
    
    if(ext != 'txt'){
        //errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";

        context.strokeStyle = "rgba(240, 24, 24, 1)";
        context.strokeText(".txt no detectado", 50, 50);

        nombre.innerText = "";
        tamaño.innerText = ""; 
        tipo.innerText = "";
        ultima.innerText = "";
        contenido.innerText="";
        return;
    }
    
    if (archivo.type.match(/text.*/)) {
        var lector = new FileReader();
        lector.onload = function (evento) {
            nombre.innerText = "Nombre del archivo: " + archivo.name;
            tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes"; 
            tipo.innerText = "Tipo del archivo: " + archivo.type;
            ultima.innerText = "Fecha de la última modificación: " + archivo.lastModifiedDate;
            contenido.innerText="Contenido del archivo: " + lector.result;
        }

        context.strokeStyle = "rgba(124, 224, 24, 1)";
        context.strokeText(".txt detectado", 50, 50);

        lector.readAsText(archivo);
    }
};