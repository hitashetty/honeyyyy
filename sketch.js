//ask about the animation
//will firebbase go after 30 days
//audio
//how to turn the text colour for "hello player" white
var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var audio;
var starsAnimation; 
var stars;
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  ground = loadImage("../images/ground.png");
  starsAnimation = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png")
  //stars = loadImage("../images/1.png");
  audio = loadSound("audio.mp3");

}

function setup(){
  stars = createSprite(250,250);
  stars.addAnimation("jj",starsAnimation);
  canvas = createCanvas(displayWidth, displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //audio.play();
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites();
}
