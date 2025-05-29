

// // metodosd de propiedades


// const reproductor = {
//   reptoducir: function (id) {
//     console.log(`reproduciendo cancion....${id}`)
//   },
//   pausar: function (id) {
//     console.log(`pausando cancion....${id}`)
//   },

//   crearPlayList: function (nombreList) {
//     console.log(`creando play list ${nombreList}`)
//   },
//   ejecutandoPlaylist: function (nombreList) {
//     console.log(`esta sonando ${nombreList}`)
//   },
//   apagar: function () {
//     console.log(`apagando`)
//   }
// }

// reproductor.borrar = function (id) {
//   console.log(`borrando cancion....${id}`)
// }

// reproductor.refresh = function () {
//   console.log('refrescando')
// }
// reproductor.reptoducir(30)
// reproductor.pausar(30)
// reproductor.borrar(30)
// reproductor.crearPlayList('mi musica favorita')
// reproductor.ejecutandoPlaylist('mi musica favorita')
// reproductor.refresh()
// reproductor.apagar()


// function leer(libro) {
//   return `leyendo... ${libro}`
// }

// const miLIbro = leer('el arte de la guerra')
// console.log(miLIbro)


// Arrow function
const aprendiendo = () => 'Aprendiendo JS'

console.log(aprendiendo())

// reproductor con arrow function

const reproductor = {
  reproducir: (id) => {
    console.log(`reproduciendo cancion....${id}`)
  },
  pausar: (id) => {
    console.log(`pausar cancion # ${id}`)
  },
  delete: (id) => {
    console.log(`borrando cancion # ${id}`)
  },

  set nuevaCancion(cancion) {
    this.cancion = cancion,
      console.log(`añadiendo nueva cancion ${cancion}`)
  },

  get obtenercancion() {
    console.log(`${this.cancion}`)
  }
}


reproductor.nuevaCancion = 'la bamba'
reproductor.obtenercancion;
reproductor.reproducir(12)
reproductor.pausar(12)
reproductor.delete(12)


// carrito con arrow function

const carrito = [
  { nombre: 'monitor', precio: 500 },
  { nombre: 'televisor', precio: 1000 },
  { nombre: 'tablet', precio: 300 },
  { nombre: 'celular', precio: 700 }


]

const nuevoCarrito = carrito.map(producto => {
  return `Producto: ${producto.nombre} - Precio: ${producto.precio}`;

})

const nuevoCarritos = carrito.forEach((producto) => {
  return `Producto: ${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoCarrito)
console.log(nuevoCarritos)

