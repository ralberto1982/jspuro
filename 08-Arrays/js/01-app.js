// ARRAYS

const numeros =[10,20,30]

const meses=['enero','febrero','marzo']

const varios=[10, 'perro',15,true,null,{nombre:'edwin'},[1,2,3]]


// acceder a los arreglos
console.table(meses)
// accediendo al indice
console.log(numeros[0])

// OPERACAIONES UTILES CON ARREGLOS
// RECORRER UN ARREGLO
// CONOCER TAMAÑO
console.log(meses.length)
// recorrer con for
for(let i=0; i< meses.length; i++){
  console.log(meses[i])


}
const carrito=[]
// agregar por position
meses[0]='nuevo mes'
meses[7]='otro mes'
//  agreagar al final 
meses.push('junio')
const producto={
  nombre:'celular',
  precio:200
}
const producto2={
  nombre:'celular2',
  precio:300
}
carrito.push(producto)
// agregar al inicio
carrito.unshift(producto2)


// utilizar spread operator forma declarativa
let resultado;
resultado=[...carrito, producto]
 
console.log(resultado)
// console.table(carrito)
// console.table(meses)


// eliminar ultimo elemento de un arreglo
carrito.pop()
console.log(carrito)
// eliminar del inicio del arreglo
carrito.shift()

// eliminar del medio
carrito.splice(1,1)

// destructuring de arreglos 
const numeros4=[10,20,30,40,50]
const [primero, segundo, tercero]=numeros4
// si necesitamos el tercero solamente
const [,,tercer]=numeros4
console.log(primero)
console.log(segundo)

