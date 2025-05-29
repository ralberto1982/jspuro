// DIFERENCIAS ENTRE FUNCIONES Y  METODODS
// NO TIENEN DIFRENCIAS SU DIFERENCIA ESTA DEPENDIENDO DEL CONTEXTO DONDE SE USEN
// UNA FUNCION ES UN BLOQUE DE CODIGO QUE SE PUEDE LLAMAR EN CUALQUIER MOMENTO PARA REALIZAR
// UNA TAREA ESPECIFICA

const numero = 1;
const texto = 2
// console.log(parseInt(texto) + '  ' + ' LO CONVERTIMOS EN STRING')

// console.log(numero.toString())

// ARGUMETOS O PARAMETROS EN LAS FUNCIONES
function sumar(a, b, c = '') {
    console.log(a + b - c)
}

sumar(20, 300, 20)

function saludar(nombre, apellido, profesion = '') {
    console.log(`Hola ${nombre} ${apellido} es un gusto saludarte y darte la bienvenida. a nuestra empresa como ${profesion}`)

}

saludar('edwin', 'de jesus', 'sofware developer')


// PARAMETROS POR DEFECTO PARA EVITAR ERRORES
function datos(nombre = '', valor = '', bonificacion = '') {

    console.log(`hola ${nombre} tu nomina es:${valor} y tu bonificacion es: ${bonificacion} en total es: ${valor + bonificacion}`)


}

datos('edwin', 200, 10)