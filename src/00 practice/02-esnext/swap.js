console.log("****** SWAP ******");
/*
  ¿Qué tengo que hacer? 
    ¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?

  ¿Cómo lo he hecho? 
    1.- Usando destructuring

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

let a = "A";
let b = "B";

[a, b] = [b, a];

console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");
