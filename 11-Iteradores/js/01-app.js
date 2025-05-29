// iteradores

// for (let i = 0; i < 10; i++) {
//     console.table(`numero ${i}`);

// }
// =====================================
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`numero ${i} es par`);
//     } else {
//         console.log(`numero ${i} es impar`);
//     }

// }


const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 500 },
    { nombre: 'television', precio: 100 },
    { nombre: 'tablet', precio: 200, descuento: true },
    { nombre: 'audifonos', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 }
]
// =====================================
// for (let i = 0; i < carrito.length; i++) {
//     console.log(`${carrito[i].nombre} ---PRECIO ${carrito[i].precio}`)
// }
// =====================================
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log('CINCO');
//         // break;
//         continue;

//     }
//     console.log(`Numero: ${i}`)
// }

// ====================================
// for (let i = 0; i < carrito.length; i++) {
//     if (carrito[i].descuento) {
//         console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
//         continue;
//     }
//     console.log(`${carrito[i].nombre}`)
// }

// =====================================

// for (let i = 1; i <= 15; i++) {
//     if (i % 5 === 0) {
//         console.log(`${i} FIZZ BUZZ!!`)
//     } else if (i % 3 === 0) {
//         console.log(` ${i} fizz`)
//     } else if (i % 2 === 0) {
//         console.log(` ${i} buzz`)
//     }



// }

// =====================================
// se ejecuta siempre que la afirmacion sea verdadera
let i = 1000;
// while (i <= 30) {
//     if (i % 5 === 0) {
//         console.log(`${i} fizz buzz`)
//     } else if (i % 3 === 0) {
//         console.log(`${i} fizz`)
//     } else if (i % 2 === 0) {
//         console.log(`${i} buzz`)

//     }
//     i++;
// }

// =====================================
// do while se ejecuta al menos 1 vez y luego comprueba

// do {
//     i++;
//     console.log(`${i}`)
// } while (i < 10)

// ====================================
// forEach ideal para recorer arreglos

// const animales = ['perro', 'gato', 'vaca']
// animales.forEach((animal, indice) => {
//     console.log(`${indice} : ${animal}`)
// })


// carrito.forEach((producto) => {
//     console.log(producto.nombre)
// })
// // crear un nuevo arreglo
// carrito.map((producto) => {
//     console.log(producto.precio)
// })

// for (let producto of carrito) {
//     console.log(producto.precio)
// }


// itera sobre objetos
const carros = {
    nombre: 'chevrolet',
    modelo: 1985
}
// for (let propiedad in carros) {
//     console.log(`${carros[propiedad]}`)
// }

for (let [llave, valor] of Object.entries(carros)) {
    console.log(valor)
    console.log(llave)
}
