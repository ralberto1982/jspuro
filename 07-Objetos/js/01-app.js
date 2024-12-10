"use strict";

// OBJETOS  un objeto agrupa todo en una sola variable

// Objeto literal

const producto = {
    nombre:'edwin',
    precio:300,
    disponible:true
}
// como acceder a los elementos del objeto
// sintaxis de .
// console.log(producto.nombre)
// sintaxis de corchetes
// console.log(producto['precio'])

// agregar mas propiedades al objeto
// producto.imagen='imgen.jpg'

// eliminar una prpiedad
// delete producto.disponible;

// estraer los datos con objecs destructuring
// const {nombre, precio, disponible, imagen} = producto;
// console.log(nombre)

// objetos dentro de otro objeto

// const user = {
//     nombre:'edwin',
//     precio:300,
//     disponible:true,
//     informacion:{
//      edad:25,
//      peso:70
//     }
// }

// console.log(user.informacion.edad)
// desctructuring de objetos dentro de objetos
// const {nombre,informacion, informacion:{edad} } = user;
// console.log(informacion)


// reescribir objetos
producto.disponible=false;
delete producto.precio;

//  congelar objetos


// congelar el objeto para evitar la sobreescritura
Object.freeze(producto)
console.log(Object.isFrozen)

// otro sellar 
// Object.seal(producto)
// console.log(Object.isSealed)

producto.disponible=true
producto.edad
console.log(producto)