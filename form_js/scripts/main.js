function GeneraForm(){
let formulario = document.createElement("form");
let tiulo = document.createElement("label");
let cajaNombres = document.createElement("input");
let cajaApellidos = document.createElement("input");
let cajaCorreo = document.createElement("input");
let cajaAsunto = document.createElement("input");
let cajaMensaje = document.createElement("textarea");
let boton = document.createElement("button");

// Asignamos atributos
formulario.setAttribute('method', "post");
formulario.setAttribute('action', "../index.html");
formulario.setAttribute

// Asignamos atributos al input Nombres
cajaNombres.setAttribute('type', "text");
cajaNombres.setAttribute('placeholder', "Escribí tu nombre acá");
cajaNombres.setAttribute('estilo', "width:100%;margin: 10px 0px;padding: 5px");

// Asignamos atributos al input Apellido
cajaApellido.setAttribute('type', "text");
cajaApellido.setAttribute('placeholder', "Escribí tu apellido acá");
cajaApellido.setAttribute('estilo', "width:100%;margin: 10px 0px;padding: 5px")

// Asignar atributos al objeto caja de texto de Email
cajaTextEmail.setAttribute('type', "text"); // Asignar el atributo type
cajaTextEmail.setAttribute('placeholder', "Email"); // Asignar el atributo placeholder
cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px"); // Asignar el atributo style

// Asignar atributos al objeto caja de texto de Asunto
cajaTextAsunto.setAttribute('type', "text"); // Asignar el atributo type
cajaTextAsunto.setAttribute('placeholder', "Asunto"); // Asignar el atributo placeholder
cajaTextAsunto.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px"); // Asignar el atributo style

// Asignar atributos al objeto area de texto de Mensaje
cajaTextMensaje.setAttribute('placeholder', "Mensaje"); // Asignar el atributo placeholder
cajaTextMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px"); // Asignar el atributo style

// Asignar atributos al objeto boton
boton.setAttribute('type', "button"); // Asignar el atributo type	
boton.setAttribute('value', "Enviar"); // Asignar el atributo value
boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;"); // Asignar el atributo style
boton.setAttribute('onclick', "alert('Se envió el mensaje')"); // Asignar el metodo onclick

titulo.innerHTML='<h1>Contacto</h1>'; // Asignar el texto de titulo en el objeto titulo
formulario.appendChild(titulo); // Agregar el objeto titulo al objeto formulario
formulario.appendChild(cajaNombres); // Agregar el objeto caja de texto Nombres al objeto formulario
formulario.appendChild(cajaApellido); // Agregar el objeto caja de texto Apellidos al objeto formulario
formulario.appendChild(cajaCorreo); // Agregar el objeto caja de texto Email al objeto formulario
formulario.appendChild(cajaAsunto); // Agregar el objeto caja de texto Asunto al objeto formulario
formulario.appendChild(cajaMensaje); // Agregar el objeto area de texto del Mensaje al objeto formulario
formulario.appendChild(boton); // Agregar el objeto boton al objeto formulario
document.getElementById('ContentFormulario').appendChild(formulario); // Agregar el formulario a la etiquete con el ID

document.getElementById("contenido-formulario").appendChild(formulario) // JS no va a crear un documento, sino que va a agarrar de la página web el elemento por Id; Dentro del documento buscá la etiqueta que tenga el ID contenido-formulario, una vez que lo agarraste le vas a poner dentro del HTML el objeto formulario. UNA FUNCIÓN DENTRO DE OTRA FUNCIÓN.
}