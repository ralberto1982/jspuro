// METODOS PARA STRING O CADENAS DE TEXTO
// en js podemos utilizar metodos encadenados uno despues de otro
const producto = 'celular'
const producto02 = '  Monitor de 20 pulgadas'
const producto03 = 'y tablet'
const precio = 30
// cantidad de letras de cadena de texto
console.log(producto02.length)
// encontrar posisision
console.log(producto02.indexOf('Monitor'))
// revisar si exite 
console.log(producto02.includes('Monitor'))
// concatenar
console.log('el producto' + producto + ' vale ' + precio)
console.log(producto02.concat(producto03))
// concatenar utilizando el bacti `` o template strings
console.log(`el ${producto02} tiene un valor de ${precio}`)

// eliminar espacios al principio y al inicio trimStart,al final trinEnd, en ambos lados trim
console.log(producto02.trimStart())
// reemplazar
console.log(producto02.replace('pulgadas', '"'))
// repetir
const texto = 'en promocion'.repeat(3)
console.log(`${producto02} ${texto}`)
// cortar (los parametros indican donde empiezan y donde terminan)
console.log(producto02.slice(2, 10))
// cortar con subtring
console.log(producto02.substring(1, 8))
const usuario = 'Edwin'
console.log(usuario.substring(0, 1))
// tomar una letra
console.log(usuario.charAt(0))
console.log(producto.charCodeAt())
// dividir un extring
const activida = 'estoy aprendiendo'
console.log(activida.split(' '))
const hobbies = 'leer, comer, correr, jugar, aprender'
console.log(hobbies.split(','))
// mayusculas
console.log(producto02.toUpperCase())
// minusculas
console.log(producto02.toLowerCase())



