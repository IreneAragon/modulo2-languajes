console.log("****** DEEP EQUAL ******");
/*
  ¿Qué tengo que hacer? 
  APARTADO A
    Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función 
    que compare el contenido de 2 objetos.
  APARTADO B
    Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir 
    anidamiento de objetos.

  ¿Cómo lo he hecho?  
    1.- Utilizando el método JSON.stringify()

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/

/******************
/    APARTADO A
/******************/

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(user === clonedUser); // false
console.log(isEqual(user, clonedUser)); // true

/******************
/    APARTADO B
/******************/

var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isDeepEqual(user, clonedUser)); // true
