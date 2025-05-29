
inicarApp()

function inicarApp() {
    console.log('iniciando app')


    segundaFunction()
}

function segundaFunction() {
    console.log('desde la segunda function')
    usuarioauth('pablo')
}

function usuarioauth(usuario) {
    console.log('autenticado usuario.... espere....')
    console.log(`usuario autenticado correctamente, bienvenido:${usuario}`)
}

// FUNCIONAN QUE RETORNAN VALORES
function sumar(a = '', b = '') {
    return (a + b)

}
const resultado = sumar(5, 3)

console.log(parseInt(resultado))


// EJEMPLO MAS AVANZADO
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularimp(total) {
    return total * 1.5;
}
calcularimp()
total = agregarCarrito(400)
console.log(total)

const totalPagar = calcularimp(total)


console.log(`El total a apagar es ${totalPagar}`)
