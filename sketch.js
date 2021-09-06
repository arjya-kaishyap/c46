
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score =0;

var thor1, villan5, strombreaker,gameover, background;
var thor1Img,villan5Img, villan4Img, gameoverImg, backgroundImg;
var villan5Group, villan4Group;
var score = 0;

var life =20;
var score=0;
var gameState=1

function preload(){
	thor1Img = loadImage("image/thor.png")
	gameoverImg = loadImage("image/gameOver.png")
	villan5Img = loadImage("image/villan5.png")
	villan4Img = loadImage("image/villan4.png")
	backgroundImg= loadImage("image/backgroundImage.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg= createSprite(50, width/2, 100,height);
	bg.addImage(backgroundImg)
	bg.scale = 50
	
	thor1= createSprite(100, height/2, 50,50);
	thor1.addImage(thor1Img)
	thor1.scale=1
	 
	villan5Group = createGroup();   
	villan4Group = createGroup(); 


	Engine.run(engine);
  
}

function draw() {
	background(backgroundImg);
  
	
	  //showLife() 
	 // push();{
	  //image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
	  //fill("white");
	  //rect(width / 2 - 100, height - player.positionY - 400, 185, 20);
	  //fill("#f50057");
	  //rect(width / 2 - 100, height - THOR.positionY - 400, player.life, 20);
	 // noStroke();
	 // pop();
	//}
  
	//if(gameState===1){
	 // gun.y=mouseY 
  
//}
	  drawSprites();

	   
  }