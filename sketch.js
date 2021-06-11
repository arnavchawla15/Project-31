
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var world
var boy,treeImg;

function preload(){
	boy=loadImage("boy.png");
	treeImg = loadImage("tree.png");
  }

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground();
	stoneObj = new Stone(100,460,23);
	m1 = new Mango(600,290,34);
	m2 = new Mango(855,325,35);
	m3 = new Mango(670,260,35);
	m4 = new Mango(730,200,35);
	m5 = new Mango(710,320,36);
	m6 = new Mango(780,250,35);
	m7 = new Mango(825,170,33);
	m8 = new Mango(880,260,35);
	m9 = new Mango(940,220,35);
	m10 = new Mango(980,305,35);

	launcherObject = new Throw(stones.body,{x:100,y:465});

	tree  = createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale = 0.42;

	boy  = createSprite(160,550);
	boy.addImage(boy);
	boy.scale = 0.125;
	
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
    background("grey");

	fill("black");
	textSize(18);

	detectCollision(stones,m1);
	detectCollision(stones,m2);
	detectCollision(stones,m3);
	detectCollision(stones,m4);
	detectCollision(stones,m5);
	detectCollision(stones,m6);
	detectCollision(stones,m7);
	detectCollision(stones,m8);
	detectCollision(stones,m9);
	detectCollision(stones,m10);
 
    image(boy ,200,340,200,300);
  
	stones.display();
	groundObject.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();
	m10.display();

	drawSprites();
}

function mouseDragged(){
	matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(stones,mango){
	if(stones.body.position.x-mango.body.position.x <mango.diametre +stones.diametre
	   && mango.body.position.x - stones.body.position.x < mango.diametre + stones.diametre
	   && stones.body.position.y-mango.body.position.y <mango.diametre +stones.diametre
	   && mango.body.position.y - stones.body.position.y < mango.diametre + stones.diametre){
		   Matter.Body.setStatic(mango.body,false);
	   }
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}