console.log("****** CALIFICATIONS ******");
/*
  ¿Qué tengo que hacer? 
    Dada la calificación de alumnos de una clase en forma de objeto como el siguiente: eso2o
    Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo 
    el sistema de calificación español.

  ¿Cómo lo he hecho?  
    1.- Accediendo a los valores del objeto con el método Object.values().
    2.- Calcular la media realizando una suma de todos los elementos del array con el método reduce() 
        y a continuación dividiendo esa suma entre el número de elementos del array.
    3.- Mostrar la media de la clase mediante un switch según el valor obtenido de la media. 


    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch

*/

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const eso1o = {
  David: 5.25,
  Maria: 6.5,
  Jose: 4.75,
  Juan: 2.5,
  Blanca: 5.75,
  Carmen: 9,
  Sergio: 3.25,
  Monica: 7.2,
};

function printAverage(classResults) {
  const getValues = (classResults) => Object.values(classResults);
  const values = getValues(classResults);
  const sum = values.reduce((acc, val) => acc + val);
  const average = sum / values.length;

  switch (true) {
    case average >= 0 && average < 4:
      const result = "Muy deficiente = por debajo de 4";
      break;
    case average >= 4 && average < 5:
      const result = "Insuficiente = entre 4 y 5";
      break;
    case average >= 5 && average < 6:
      const result = "Suficiente = entre 5 y 6";
      break;
    case average >= 6 && average < 7:
      const result = "Bien = entre 6 y 7";
      break;
    case average >= 7 && average < 9:
      const result = "Notable = entre 7 y 9";
      break;
    case average >= 9 && average < 10:
      const result = "Sobresaliente = entre 9 y 10";
      break;
    case average == 10:
      const result = "Matrícula de Honor = 10";
      break;
    default:
      const result = "Parece que ha habido un error";
  }
  return result;
}

console.log(printAverage(eso2o)); // Notable = entre 7 y 9
console.log(printAverage(eso1o)); // Suficiente = entre 5 y 6
