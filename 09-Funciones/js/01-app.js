// las funciones nos permiter dividir el codigo o reutilizarlo
// declaracion de funcion
// nos permite tener el codigo mas limpio y ordenado
// function declaration o declaracion de funcion se puede llamar antes de declararla
sumar();
function sumar() {
    console.log(2 + 2);
}




// expresion de funcion no se puede llamar antes de declararla
const sumar2 = function () {
    console.log(3 + 3);
}
sumar2();

// diferencias entre function declaration y function expression
// FUNTION ESPRESSION
// se puede guardar en una variable PERO NO S EPUEDE LLAMAR  ANTES DE DECLARARLA

// FUNTION DECLARATION
// se puede llamar antes de declararla
