// Condicional if

if (40 == 45) {
    console.log('La comparación es verdadera');
}
else {
    console.log('La comparación no es verdadera')
}

// Ifs anidados -- un if dentro de otro
let primerNumero = 15

if(primerNumero > 10) {
    if(10 == 10) {
        console.log(primerNumero + ' es mayor a diez y diez igual a diez');
    }
    else {
        console.log('Es mayor a quince pero no es igual a diez')
    }
}
else {
    console.log('No es mayor a quince')
}

// else if

if(25 == 30){
    console.log('25 es igual a 30')    
}

else if(25 > 30){
    console.log('25 es mayor a 30')
}

else{
    console.log('25 es menor a 30')
}

// Operador condicional ternario
let edad = 17;

let MayorEdad = edad > 18 ? 'Es mayor de edad' : 'No es mayor de edad';


