console.log("****** SUBSETS ******");

/*
  ¿Qué tengo que hacer? 
    Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra

  ¿Cómo lo he hecho?  
    Utilizando el método substring, he recorrido el string ido eliminando una parte de la palabra en el bucle

  Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/

function subsets(word) {
  for (let i = 1; i < word.length; i++) {
    console.log(word.substr(i));
  }
}

subsets("message");
// essage
// ssage
// sage
// age
// ge
// e
