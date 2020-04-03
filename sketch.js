var database;
var position;
var game, player, form; 
var gameState = 0;
var playerCount;



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.startState();

}

function draw(){

}
