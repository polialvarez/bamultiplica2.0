//function saludar() {
//    let nombreUsuario = prompt("Dime tu nombre");
//    alert("Hola "  + nombreUsuario);
//};


//function saludarInvitar( nombre, dia ){
//    nombre = prompt("¿Quién anda ahí?");
//    dia = prompt("¿Qué día es hoy?");
//    alert()
//}

// function bienvenida(nombre, apellido, serieFavorita) {
//    alert("Hola " + nombre + " " + apellido + ", tu serie favorita es: " + serieFavorita);
// }

// function sumar (numero1, numero2){
//    // Esta función suma dos numeros entre si
//    // Pide los argumentos numero1 y numero2
//    // Ambos argumentos deben ser tipo numerico
//    return numero1 + numero2;
// };

// console.log( sumar(25,15));

// function largoNombre(nombre){
//     return nombre.lenght
// }

// let longitud = largoNombre("Poli");

// console.log(longitud)



// let tituloChiquito = document.querySelector("#titulo-chiquito")
// console.log(tituloChiquito)

// let contenedor = document.querySelector(".contenedor")

// let parrafo = document.querySelector(".parrafo")
// console.log(parrafo.innerHTML)

// let parrafos = document.getElementsByClassName(parrafo)
//
// console.log(parrafos)

// let divs = document.getElementsByTagName("div")
// console.log(divs)


// function saludar() {
//     let nombreUsuario = prompt("Dime tu nombre");
//     alert("Hola "  + nombreUsuario);
// };

let boton = document.getElementById("boton")

boton.addEventListener("click", alertaClick);

function alertaClick() {
    alert("Click identificado")
};

