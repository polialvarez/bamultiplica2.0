let conjuntoNumeros = [12, 2, 90, 5, 0, -12 ]

console.log(conjuntoNumeros[2])
// posición 0, 1, 2... 90 está en la posición 2

let conjuntoVacio = []
console.log(conjuntoVacio)

let conjuntoMixto = ['rojo', 14, 'siete', true, '54']
console.log(conjuntoMixto)

console.log(conjuntoMixto[0])
console.log(conjuntoMixto[4])

let arrayCompuesto = [
    conjuntoNumeros, 
    conjuntoVacio,
    conjuntoMixto
]

console.log(arrayCompuesto)

// Propiedades de los arrays
console.log(conjuntoVacio.lenght)
console.log(arrayCompuesto[2].lenght)

