console.log("****** INCLUDES ******");

/*
  ¿Qué tengo que hacer? 
    En ES7 ya existe una función de manejo de arrays llamada Array.includes() que indica si 
    un determinado valor figura entre los items de un array dado. Crea una función en ES5 
    con el mismo comportamiento, es decir, una función que reciba un array y un valor y 
    devuelva un boolean indicando si el valor está dentro del array.

    Challenge
    El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays que
    devuelve el índice de un elemento dado.
    TIP: Consulta la documentación en MDN sobre los arrays:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

  ¿Cómo lo he hecho?  
    1.- Utilizando el método includes()
    2.- Utilizando el métoro indexOf()

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/

const includes = (array, value) => array.includes(value);

console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

/** CHALLENGE **/
// No sé por qué usar indexOf sería más simplificado que utilizar el método includes, algo
// se me está escapando.
const checkIfExists = (array, val) =>
  array.indexOf(val) !== -1 ? true : false;

console.log(checkIfExists([1, 2, 3], 3)); // true
console.log(checkIfExists([1, 2, 3], 0)); // false
