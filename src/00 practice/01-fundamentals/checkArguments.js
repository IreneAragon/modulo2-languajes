console.log("****** CHECK ARGUMENTS ******");
/*
  ¿Qué tengo que hacer? 
    Es muy habitual en javascript, al recibir argumentos de una función, 
    querer asegurarnos de que no sean undefined o null. En este ejercicio 
    debes convertir el código de abajo en algo equivalente pero más compacto 
    y expresivo.

    TIP: Piensa en el operador ternario y también en el operador OR.
    TIP: Puedes suponer que input es siempre de tipo string, incluyendo null 
         o undefined. Es decir, no vas a recibir números, objetos, etc.

  ¿Cómo lo he hecho? 
    Utilizando un ternario anidado, el ejercicio se puede resolver con un solo
    ternario y el operador OR, pero no consigo acertar con la sintaxis adecuada. 

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/
function x(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}

function f(input) {
  const result = input === undefined ? "Unknown" : input === null ? "" : input;
  return result;
}

console.log(f("Hola")); // hola
console.log(f("")); //
console.log(f(null)); //
console.log(f(undefined)); // Unknown
