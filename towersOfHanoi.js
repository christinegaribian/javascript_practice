const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Game {

  constructor() {
    //this.towers = array with starting size
    this.towers = [[3,2,1],[],[]];
  }

  // game(){
  //   // until the game is won
  //     // prompt the reader for a move
  //     // make move
  //     //
  // };
  //
  // game_won(){
  //   // game is won if the second or third column has a length of 3 and all
  //
  // };
  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.towers[startTowerIdx].length === 0) {
      return false;
    } else if (this.lastElement(endTowerIdx) < this.lastElement(startTowerIdx)) {
      return false;
    } else {
      return true;
    }
  }

  move(startIdx, endIdx) {
    if (this.isValidMove(startIdx, endIdx)){
      this.towers[endIdx].push(this.towers[startIdx].pop());
      return true;
    } else {
      return false;
    }
  }


  lastElement(towerIdx) {
    return this.towers[towerIdx][this.towers[towerIdx].length - 1];
  }
}

Game.prototype.promptMove = function(callback) {
  //prints stacks
  console.log(this.towers);
  //asks user where to move to and where to move from
  reader.question('Please enter a origin: ', function(or) {
    console.log(`You replied ${or}`);
    const origin = parseInt(or);
    reader.question('Please enter a destination: ', function(dest){
      console.log(`You replied ${dest}`);
      const destination = parseInt(dest);
      callback(origin, destination);
    });
    //passes start idx and end idx to callback
  });
};


let game1 = new Game();
// game1.promptMove((start, finish) => console.log(start, finish));
console.log(game1.move(0,2));
// console.log(game1.isValidMove(0,0));
// console.log(game1.isValidMove(0,1));
console.log(game1.isValidMove(0,2));
console.log(game1.towers);
