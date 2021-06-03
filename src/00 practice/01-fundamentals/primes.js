console.log("****** PRIMES ******");

/*
  ¿Qué tengo que hacer? 
    Crea una función tal que, dado un número entero de inicio from y otro de fin to, 
    encuentre los números primos entre ellos y los muestre por pantalla.
    Asi pues, la salida desde el 1 al 10 sería:
        1 is not a prime
        2 is PRIME!
        3 is PRIME!
        4 is not a prime
        5 is PRIME!
        8 is not a prime
        9 is not a prime
        10 is not a prime

    Utiliza la función para explorar todos los primos hasta el 100.

    TIP: 
    Puedes crearte una función auxiliar para saber si un número es primo o no, y 
    utilizarla en tu función principal. Es buena práctica crear funciones auxiliares que 
    hagan una sola cosa (principio de única responsabilidad).

    CHALLENGE 
    Se puede mejorar mucho el rendimiento del ejercicio anterior. Al buscar si un numero 
    es primo, podemos dejar de comprobar si es divisible por cada entero mayor que 1 una 
    vez alcancemos la raiz cuadrada de dicho número.

    TIP: Explora en la documentación todas las funciones matemáticas que nos ofrece JavaScript 
    mediante el interfaz Math: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

  ¿Cómo lo he hecho?  
    1.- Recorriendo con un bucle for desde el número 2 hasta el número dado 
    2.- Recorriendo con un bucle for desde el número 2 hasta la raíz cuadrada del número dado

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
    [-] http://lineadecodigo.com/javascript/numeros-primos-del-1-al-100-en-javascript/

*/

// Get if a number is prime
const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

/*** CHALLENGE ***/
// Get if a number is prime using Math.sqrt()
const isPrime = (number) => {
  for (let i = 2, squareRoot = Math.sqrt(number); i <= squareRoot; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

// print if number is prime or not from x to i
function showPrimes(from, to) {
  for (let i = from; i < to + 1; i++) {
    let msg = isPrime(i) ? `${i} is PRIME!` : `${i} is not a prime`;
    console.log(msg);
  }
}

showPrimes(1, 100);
