const itemsProducts = {
    nombr: 'tablet',
    precio: 200,
    disponible: true,
    mostrar: function () {
        console.log(`el producto ${this.nombr} vale ${this.precio}`)
    }
}

const frutas = {
    nombre: 'pera',
    color: 'verde'
}
// ====metodos para objetos===

// // ===uniendo objetos
// const resultado = Object.assign(itemsProducts, frutas)
// console.log(resultado)

// //==== spread operator+-

const resultado2 = { ...frutas, ...itemsProducts }
console.log(resultado2)


// this dentro de los objetos

// itemsProducts.mostrar()

// ====object constructor====

function product(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}

const producto2 = new product('monitor', 300)
const producto3 = new product('tablet', 200)
const producto4 = new product('celular', 1000)

console.log(producto2)
console.log(producto3)
//
// saber si un objeto es un objeto o un array nos da las propiedades del objeto
console.log(Object.keys(frutas))
// oject entries nos devuel ve todo en array
console.log(Object.entries(frutas))
// object values nos devuelve solo los valores
console.log(Object.values(frutas))
