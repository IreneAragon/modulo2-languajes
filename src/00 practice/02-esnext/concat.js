console.log("****** CONCAT ******");
/*
  ¿Qué tengo que hacer? 
  Apartado A
    Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.

  Apartado B
    Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites solamente a 2).

  ¿Cómo lo he hecho?  
    1.- Apartado A: utilizando el operador rest / spread.
    2.- Apartado B: he pensado en dos maneras distintas de hacerlo: 
        b: utilizando el método reduce() 
        b - extra: utilizando el método flat() de ES2019


    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
    [-] https://latteandcode.medium.com/es2019-aplanar-arrays-en-javascript-con-array-flat-b9028a647734
*/
const arr1 = ["uno", "dos", "tres"];
const arr2 = ["cuatro", "cinco", "seis"];
const arr3 = ["siete", "ocho"];
const arr4 = ["nueve"];

/*** Apartado A  ***/
const concat = (a, b) => {
  console.log("Rest/Spread: ", [...a, ...b]);
};
concat(arr1, arr2);

/*** Apartado B  ***/
const concat2 = (...arg) => arg.reduce((acc, val) => [...acc, ...val], []);
console.log("Reduce(): ", concat2(arr1, arr2, arr3, arr4));

/*** Apartado B- extra  ***/
const concat3 = (...arg) => arg.flat();
console.log("Flat(): ", concat3(arr1, arr2, arr3, arr4));
