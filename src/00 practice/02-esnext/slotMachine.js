console.log("****** SLOT MACHINE ******");
/*
  ¿Qué tengo que hacer? 
  El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez 
  que juguemos insertemos una moneda.
  Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá 
  incrementando conforme vayamos jugando. Cuando se llame al método play el número de monedas debe 
  incrementar de forma automática y debe generar tres booleanos aleatorios. En caso de que los tres 
  booleanos sean true debe un mensaje por consola:
    Congratulations!!!. You won <número de monedas> coins!!
  y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En 
  caso contrario deberá mostrar otro mensaje:
    Good luck next time!!

  ¿Cómo lo he hecho?  
    1.- En el método constructor he iniciado las monedas a 1, puesto que cuando ganas la máquina
        se queda vacía pero en el momento que vuelves a jugar has introducido una moneda, por lo 
        tanto, como mínimo, siempre vas a ganar la moneda que acabas de introducir. 
    2.- He generado tres booleanos aleatorios mediante Math.random() >= 0.5, ya que hay un 50% 
        de posibilidades de obtener un número superior o inferior a 0.5, ya que el rango de 
        Math.random es de 0 a 1. 
    3.- Almaceno en la variable "luckyGuy" si las tres vueltas de ruleta son true, si alguna de las
        vueltas devuelve false, entonces devolverá false. 
    4.- Si la variable "luckyGuy" devuelve true, entonces el jugador habrá ganado, por lo que se 
        suman las monedas de sus tiradas y se le da el premio, en caso de que "luckyGuy" devuelva 
        false, habrá perdido, por lo que las monedas se reestablecen a 1. 
    5.- Finalmente se genera una instancia de la máquina tragaperras y se invoca al método play()
        que pintará en consola nuestra suerte. 

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/

class SlothMachine {
  constructor() {
    this.coins = 1;
    this.result = "";
  }

  play() {
    let firstRoulette = Math.random() >= 0.5;
    let secondRoulette = Math.random() >= 0.5;
    let thirdRoulette = Math.random() >= 0.5;

    let luckyGuy =
      firstRoulette && secondRoulette && thirdRoulette ? true : false;

    this.result = luckyGuy
      ? `Congratulations!!!. You won ${this.coins} coins!!`
      : `Good luck next time!!`;
    luckyGuy ? (this.coins = 1) : this.coins++;
    console.log(this.result);
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
