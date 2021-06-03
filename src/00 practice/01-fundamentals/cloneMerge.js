console.log("****** CLONE MERGE ******");
/*
  ¿Qué tengo que hacer? 
  APARTADO A
    Implementa una función clone que devuelva un objeto clonado a partir de otro:
  APARTADO B
    Dados dos objetos cualesquiera, implementa una función merge que mezcle uno sobre otro. 
    El objeto resultante debe ser la mezcla de las propiedades del objeto source sobre las 
    del objeto target.

  ¿Cómo lo he hecho?  
    1.- Utilizando el operador spread 

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

/******************
/    APARTADO A
/******************/

// function clone(source) {
//   const clone = { ...source };
//   return clone;
// }

const clone = (source) => {
  const clone = { ...source };
  return clone;
};

const obj = { name: "Irene", surname: "Aragón Gómez" };
console.log(obj);
console.log(clone(obj));
console.log(clone(obj) === obj);

/******************
/    APARTADO B
/******************/

// function merge(source, target) {
//   const merge = { ...target, ...source };
//   return merge;
// }

const merge = (source, target) => {
  const merge = { ...target, ...source };
  return merge;
};

// Por ejemplo, dados estos 2 objetos:
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log(merge(a, b));
