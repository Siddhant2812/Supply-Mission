var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,package_opt;
var side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green");

	engine = Engine.create();
	world = engine.world;

	 package_opt ={
		restitution:0.6,
		isStatic:true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_opt);
	World.add(world, packageBody);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	side1 = new side(200,height-45,200,20);
	side2 = new side(90,height-90,20,100);
	side3 = new side(310,height-90,20,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y;

  side1.display();
  side2.display();
  side3.display();

  keyPressed();
  Engine.update(engine);

  drawSprites();
}

function keyPressed() {
	if(keyDown("D")){
		Matter.Body.setStatic(packageBody, false);
	}
}



