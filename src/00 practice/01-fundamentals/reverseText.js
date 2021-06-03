console.log("****** REVERSE TEXT ******");

/*
  ¿Qué tengo que hacer? 
    Dado un texto cualquiera, invierte el orden de las palabras.
    TIP: Se hace en 1 sola línea.
    Ejemplo: "Uno dos tres" --> "tres dos Uno"
    TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

  ¿Cómo lo he hecho?  
    1.- Con el método split separo las palabras por espacios, las palabras se almacenan en un array
        ["uno", "dos", "tres"]
    2.- El método reverse invierte el orden de ese array
        ["tres", "dos", "uno"]
    3.- Finalmente el método join las une en un string 
        tres dos uno

  Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

const reverseText = (text) => text.split(" ").reverse().join(" ");
console.log(reverseText("uno dos tres")); // tres dos uno
