console.log("****** THIS ******");

/*
  ¿Qué tengo que hacer? 
    ¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.

  ¿Cómo lo he hecho?  
    Haciendo console.log de muchas cosas, intentando comprender y leyendo documentación y apuntes.

  Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call
*/
var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
/*
    Output: 
        Jiménez
    Con esta llamada, THIS apunta al propio ámbito del objeto anidado "wife" por lo que
    entiende que THIS se refiera a 'Jiménez'. 
*/

var surnameFunction = person.wife.getSurname;
// console.log(surnameFunction());
/*
    Output: 
        Uncaught TypeError: Cannot read property 'surname' of undefined at getSurname

    En este caso surname es undefined porque se está invocando mal al método y está intentando acceder 
    al contexto global (window), donde surname no existe.
*/

console.log(surnameFunction.call(person));
/*
    Output: 
        González
    Devuelve el valor de surname de person ya que es el objeto al que se está invocando.
    console.log(surnameFunction); devuelve : 
        ƒ () {
                return this.surname;
            }
    Por lo que si llamamos a esta función y le pasamos person, encontrará que this ahora apunta
    al surname de person, aunque la función esté definida dentro de otro objeto. 
    Si quisieramos obtener el apellido del objeto wife, habría que pasarle un ámbito correcto:
    console.log(surnameFunction.call(person.wife)); => Jiménez

    THIS devolverá siempre el valor de surname del objeto al que tenga acceso, y esto dependerá 
    de cómo sea llamada la función getSurname. 
*/
