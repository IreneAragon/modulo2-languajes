console.log("****** VALUES ******");
/*
  ¿Qué tengo que hacer? 
    Práctica: 
        Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto
    Challenge: 
        Evita añadir las propiedades heredadas en caso de ser instancia de una clase

  ¿Cómo lo he hecho?  
    1.- Accediendo a los valores del objeto con el método Object.values().
        Hay dos versiones de la función: función clásica y función flecha. 

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
*/

/*
    function values(obj) {
        return Object.values(obj);
    }
*/

const values = (obj) => Object.values(obj);

// Ejemplo práctica:
console.log(
  values({
    id: 31,
    duration: 310,
    name: "long video",
    format: "mp4",
  })
); // [31, 310, "long video", "mp4"]

// Ejemplo challenge:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
