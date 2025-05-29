// condicionales
// if, else if, else

// const puntaje = 100;

// if (puntaje === 1000) {
//     console.log("El puntaje es true");

// } else {
//     console.log("El puntaje es false");
// }

// TIPOS DE COMPARADORES
// = ASIGNACION
// ==  igual
// === igual y del mismo tipo COMPARADOR ESTRICTO
// !=  diferente
// !== diferente y del mismo tipo
// >   mayor que
// <   menor que
// >=  mayor o igual que
// <=  menor o igual que
// &&  y
// ||  o
// !   negación
const metodoPago = "efectivo";
const dinero = 200;
const totalAPagar = 300;
const tarjeta = false;

// if (dinero >= totalAPagar) {
//     console.log("Si puedes pagar")
// } else if (tarjeta) {
//     console.log("Si puedes pagar, pero con tarjeta")
// } else {
//     console.log("No puedes pagar")
// }

// switch case

// switch (metodoPago) {
//     case "efectivo":
//         pagar();
//         break;
//     default:
//         console.log("No se aceptan otros metodos de pago");
//         break;
// }

// function pagar() {
//     console.log("pagando.....")
// }
const efectivo = 100;
const credito = 9000;
const usuario = true;
const puedePagar = false;
const disponible = efectivo + credito;
const totalPagar = 400;

// operador && para evaluar si ambas condiciones son verdaderas

// if (usuario && puedePagar) {
//     console.log("Puedes comprar")
// } else if (!usuario && !puedePagar) {
//     console.log("crea una cuenta")
// } else if (!puedePagar) {
//     console.log("No tienes dinero")
// }
// else {
//     console.log("No puedes comprar")
// }


// if (disponible > totalPagar || credito > totalPagar) {
//     console.log("Puedes comprar")
// } else {
//     console.log("No puedes comprar")
// }


// recomendaciones a la hora de usar condicionales
// no pregutar lo que ya es ovio
// tener en cuenta el orden de las condiciones

const puntaje = 3900;
// if (puntaje > 1000) {
//     console.log("Excelenet puntage")
// } else {
//     console.log("No es un buen puntaje")
// }

// operador ternario

const resultado = (puntaje > 1000) ? "Excelente puntaje" : "No es un buen puntaje";
console.log(resultado);