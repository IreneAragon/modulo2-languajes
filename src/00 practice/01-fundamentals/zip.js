console.log("****** ZIP ******");
/*
  ¿Qué tengo que hacer? 
    Crea una función zipObject tal que acepte un array de claves como primer argumento y un array de 
    valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo las claves con sus 
    valores. Asumir que el array de claves tiene como mínimo la misma longitud que el de valores

    Challenge
    Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.

  ¿Cómo lo he hecho?  
    1.- Práctica: recorriendo con el método forEach el primer array (keys), e introducirlo en un objeto, 
    asignando el valor con respecto al segundo array (values). 
    2.- Challenge: igual pero antes de realizar la acción de introducir el elemento en el objeto, he 
    comprobado que el valor sea distinto de undefined que en ese caso crea el elemento en el objeto, 
    de ser unfedined no haría nada. 

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/

/* Práctica */
function zipObject(keys, values) {
  let obj = {};
  keys.forEach((key, index) => (obj[key] = values[index]));
  return obj;
}

/* Challenge */
function zipObject2(keys, values) {
  let obj = {};
  keys.forEach((key, index) =>
    values[index] != undefined ? (obj[key] = values[index]) : ""
  );
  return obj;
}

console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
); // {spanish: "hola", english: "hi", french: "salut"}

console.log(zipObject2(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
