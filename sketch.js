var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var database, form, player, game;

function setup(){
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  //background("white");
}