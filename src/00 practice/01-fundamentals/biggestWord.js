console.log("****** BIGGEST WORD ******");
/*
  ¿Qué tengo que hacer? 
  Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 
  En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta 
  que consideramos una palabra a aquello que esté separado por espacios.
  TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones
  de utilidad para el manejo y manipulación de strings.   
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

  ¿Cómo lo he hecho?  
    1.- Convierto la frase en un array que almacena las palabras, para ello uso split(). 
    2.- Obtengo la longitud de todas esas palabras que son almacenadas en un array, 
        para ello uso el método map, y devuelvo el resultado a través de una arrow function. 
    3.- Obtengo el número más alto del array anterior usando la función Math.max, de esta 
        manera ya tenemos la longitud de la palabra más larga. 
    4.- Busco la palabra en mi array de palabras que coincida en longitud con el resultado de
        la operación anterior. Para ello utilizo el método find() que devuelve el valor del 
        primer elemento del array que cumple la condición. Devuelvo el resultado a través de
        una arrow function. 

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

function biggestWord(phrase) {
  const wordsArray = phrase.split(" ");
  const wordsLength = wordsArray.map((word) => word.length);
  const longestLength = Math.max(...wordsLength);
  const biggestWord = wordsArray.find((word) => word.length === longestLength);

  return biggestWord;
}

// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
