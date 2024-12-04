
// numeros en js
const number=10
const number2=12


let resultado;

// suma
resultado =number + number2;
console.log(resultado)
// resta
resultado =number - number2;
console.log(resultado)
// multiplcacion
resultado =number * number2;
console.log(resultado)
// division
resultado =number / number2;
console.log(resultado)
// modulo
resultado =number % number2;
console.log(resultado)

// operaciones con Math
// pi
resultado=Math.PI
console.log(resultado)
// redondear si esta por encima de 5 aproxima arriba
// si esta por debajo de 5 aproxima hacia abajo
resultado=Math.round(2,8)
// con ceil redondea hacia arriba sin importar
resultado=Math.ceil(2,1)
// con floor redondea hacia el piso sin importar
resultado= Math.floor(2,7)
// raiz cuadrada
resultado=Math.sqrt(10)
// vaor absoluto
resultado=Math.abs(-500)
// potencia
resultado=Math.pow(2,4)
// valor minimo
resultado=Math.min(2,3,1)
// valor maximo
resultado=Math.max(3,7,9)
// orden de las operaciones

// el orden es como las matematicas del colegio
// de acuerdo al orden de importancia
resultado= (20+30+40+50)*.2;

// incrementos y decrementos
let puntage=5 
puntage++;//5
++puntage;//6

puntage--;//5
--puntage;//4

puntage +=3;
puntage -=3;

// methods
// typeof conocer el tipo de dato
// Number
// parseInt convierte a numero
// toString convierte a string
// parseFloat convierte a decimal

// revisar si un numero es entero
console.log(Number.isInteger(number2))