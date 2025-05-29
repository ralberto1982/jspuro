
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Nomviembre', 'Diciembre'];
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si un metodo existe

// meses.forEach((mes) => {
//     if (mes === 'Enero') {
//         console.log('existe')
//     }
// })

// includes solo funciona en array de un solo indice
const resultado = meses.includes('Enero');

// arreglos de objetos
const existe = carrito.some((producto) => {
    return producto.nombre === 'Television'
})
// console.log(existe)

const existe2 = meses.some((mes) => {
    return mes === 'Enero'
})

// console.log(existe2)

// averiguar el indice
// meses.forEach((mes, i) => {
//     if (mes === 'Abril') {
//         console.log(` Encontrado en el indice ${i}`);

//     }

//     console.log(mes)
// })

// findIndex
const indice = meses.findIndex((mes) => {
    return mes === 'Abril'

})

// console.log(`Abril Esta en el indice ${indice}`)


const indice2 = carrito.findIndex((elemento) => {
    return elemento.precio === 100
})

// console.log(indice2)



// con un forEach
let total = 0;
carrito.forEach((producto) => {
    total += producto.precio
})


// console.log(total)

// reduce
let resultado2 = carrito.reduce((total, producto) => { total + producto.precio, 0 })
// console.log(resultado2)


// filter

// let resultado3;

// resultado3 = carrito.filter((producto) => {
//     return producto.precio > 400
// })
// console.table(resultado3)

// let resultado4
// resultado4 = carrito.filter((producto) => {
//     return producto.precio < 600
// })
// console.table(resultado4)

// let resultado5
// resultado5 = carrito.filter((producto) => {
//     return producto.nombre !== 'Tablet'
// })
// console.table(resultado5)


// con foreach
let resultad
carrito.forEach((producto, index) => {
    if (producto.nombre === 'Tablet') {
        resultad = carrito[index]
    }
})

// console.log(resultad)


// con .find

const resultador = carrito.find(producto => producto.nombre === 'Tablet')

// console.log(resultador)


// every
const result = carrito.every(producto => producto.precio < 500)
// console.log(result)


const union = meses.concat(meses2)

// console.log(union)

// spreat operator

const uniendo = [...meses, ...meses2]
// console.log(uniendo)

// spreat operator con arreglo de indices
const meses3 = [...meses, 'Agosto']
console.log(meses3)

const productoadd = { producto: 'disco d', precio: 300 }

const carrito2 = [...carrito, productoadd]
console.log(carrito2)