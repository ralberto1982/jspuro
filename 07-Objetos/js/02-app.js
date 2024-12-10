const itemsProducts={
    nombr:'tablet',
    precio:200,
    disponible:true,
    mostrar:function(){
    console.log(`el producto ${this.nombr} vale ${this.precio}`)
    }
}

const frutas ={
    nombre:'pera',
    color:'verde'
}

// // uniendo objetos
// const resultado= Object.assign(itemsProducts,frutas)
// console.log(resultado)
// // spread operator

// const resultado2 ={...frutas, ...itemsProducts}
// console.log(resultado2)


// this dentro de los objetos

// itemsProducts.mostrar()

// object constructor

function product(nombre, precio){
this.nombre=nombre
this.precio=precio
}

const producto2 =new product('monitor', 300)

// console.log(producto2)
// 
console.log(Object.keys(frutas))
console.log(Object.entries(frutas))
console.log(Object.values(frutas))
