
/* -------------------------------- Variables ------------------------------- */
let addition = 0;
let firstNumber = prompt('Ingrese un número'); //Obtiene el valor ingresado en la página, mediante una alerta.
let secondNumber = prompt('Ingrese un número');

//Convertir "String" a "Number".
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);


/* ------------------------------- Operaciones ------------------------------ */
addition = firstNumber + secondNumber;


/* --------------------------------- Salidas -------------------------------- */
document.write('La suma es: ', addition);