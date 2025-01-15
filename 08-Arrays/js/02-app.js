const carrito=[
    {nombre:'monitor 27 pulgadas', precio:500},
    {nombre:'television', precio:100},
    {nombre:'tablet', precio:200},
    {nombre:'audifonos', precio:300},
    {nombre:'teclado', precio:400},
    {nombre:'celular', precio:700}
]

// forEach no crea un nuevo arreglo
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})

// map crea un nuevo arreglo
const nuevoArreglo=carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`
})  

