console.log("************** DELIVERABLE 05 *********************");

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
