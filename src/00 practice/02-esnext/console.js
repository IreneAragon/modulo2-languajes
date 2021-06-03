console.log("****** CONSOLE ******");
/*
  ¿Qué tengo que hacer? 
  Apartado A
    Intenta razonar cual será el resultado de la consola al ejecutar este código
  Apartado B
    Sin tocar ninguno de los console.log anteriores, modifica ligeramente el código para 
    que muestre la siguiente secuencia:
      1 3
      1 3
      1 2
      5
      5 6
      1 2

  ¿Cómo lo he hecho? 
    1.- A: El console mostraba "1 undefined" debido a que no tenía acceso a la variable B por
           estar en otro scope 
        B: He subido la declaración let b = 3; justo encima del try/catch
    2.- A: El console no se mostraba
        B: 
    3.- A: El console no se muestra porque no se estaba llamando a la función que pintaría
           los datos en la consola. 
        B: He dado nombre a la función y la he invocado, dentro de la función además he movido 
           al inicio las declaraciones, ahora muestra los datos correctamente. 


    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Glossary/Scope
*/

var a = 1;
let b = 2;

{
  let b = 3; // muevo arriba
  try {
    console.log(a, b);
  } catch (error) {}
  console.log(a, b);
}

console.log(a, b);

// doy nombre a la función
const f = () => {
  var a = 5; // muevo arriba
  let b = 6; // muevo arriba
  console.log(a);
  console.log(a, b);
};
f(); // invoco función
console.log(a, b);
