console.log("****** ARRAY OPERATION ******");
/*
  ¿Qué tengo que hacer? 

  Apartado A
  Implementa una función head (inmutable), tal que, dado un array como entrada 
  extraiga y devuelva su primer elemento. Utiliza destructuring.

  Apartado B
  Implementa una función tail (inmutable), tal que, dado un array como entrada 
  devuelta todos menos el primer elemento. Utiliza rest operator.

  Apartado C
  Implementa una función init (inmutable), tal que, dado un array como entrada 
  devuelva todos los elementos menos el último. Utiliza los métodos que ofrece 
  Array.prototype.

  Apartado D
  Implementa una función last (inmutable), tal que, dado un array como entrada 
  devuelva el último elemento.

  ¿Cómo lo he hecho?  
    1.- Utilizando destructuring, rest operator y el método slice()

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

let arr = ["uno", "dos", "tres", "cuatro"];

/*** APARTADO A ***/
const head = ([first]) => first;
console.log("head -> ", head(arr)); // uno

/*** APARTADO B ***/
const tail = ([, ...others]) => others;
console.log("tail -> ", tail(arr)); // ["dos", "tres", "cuatro"]

/*** APARTADO C ***/
const init = (arr) => arr.slice(0, -1);
console.log("init  -> ", init(arr)); // ["uno", "dos", "tres"]

/*** APARTADO D ***/
const last = (arr) => arr.slice(-1);
console.log("last -> ", last(arr)); // ["cuatro"]
