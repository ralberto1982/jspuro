// ARRAYS
// nos permite agrupa multiples elementos 
// ejemplos de arreglos

const numeros = [10, 20, 30]

const meses = ['enero', 'febrero', 'marzo']

const varios = [10, 'perro', 15, true, null, { nombre: 'edwin' }, [1, 2, 3]]
const dias = new Array('lunes', 'martes', 'miercoles', 'jueves', 'viernes')
const meses2 = new Array(10) // crea un arreglo de 10 elementos vacios

//==== acceder a los arreglos==
// console.table(meses)
// accediendo al indice
// console.log(numeros[0])

// =====OPERACAIONES UTILES CON ARREGLOS====

// CONOCER TAMAÑO
// console.log(meses.length)
// RECORRER UN ARREGLO
// recorrer con for
// for (let i = 0; i < varios.length; i++) {
//   console.log(varios[i])


// }
// =====creamos  un carrito de compras====
const carrito = []
// agregar por position forma imperativa modifica la variable original
meses[0] = 'nuevo mes'
meses[7] = 'otro mes'
//  agreagar al final 
meses.push('junio')
meses.push('diciembre')
meses.unshift('septiembre')

const producto = { nombre: 'celular', precio: 200 }
const productoIntermedio = { nombre: 'monitor 32 pulgadas', precio: 300 }
const producto2 = { nombre: 'tablet', precio: 100 }
// agregar al final del arreglo
carrito.push(producto)
// agregar al inicio
carrito.unshift(producto2)


// utilizar spread operator forma declarativa no modifica la variable original
// tomamos una copia de  el arreglo y le agregamos un nuevo elemento
let resultado;
resultado = [...carrito, producto]
resultado = [...carrito, productoIntermedio]

console.log(resultado)
// console.table(carrito)
// console.table(meses)


// eliminar ultimo elemento de un arreglo
carrito.pop()
// console.log(carrito)
// eliminar del inicio del arreglo
carrito.shift()

// eliminar del medio pasando el indice del arreglo
carrito.splice(0, 1)

//==== destructuring de arreglos =====
const numeros4 = [10, 20, 30, 40, 50]
const [primero, segundo, tercero] = numeros4
// si necesitamos el tercero solamente
const [, , tercer] = numeros4
// console.log(primero)
// console.log(segundo)
console.log(carrito)

