
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var myengine, myworld;


function setup() {
	createCanvas(1080, 490);
	rectMode(CENTER);


	myengine = Engine.create();
	myworld = myengine.world;

	


	dustbin1=new Dustbin(800,460,210,20);  //bottom
	dustbin2=new Dustbin(685,385,20,170);  //left
	dustbin3=new Dustbin(915,385,20,170);   //right
	paperObject=new Paper(50,200,20);
	
	groundObject=new Ground(width/2,480,width,20);
	//Create a Ground
	

	 var render = Render.create({
	   element: document.body,
	   engine: myengine,
	   options: 
	   {
         width: 1300,
	     height: 700,
	     wireframes: false
	   }
	 }); 

	
	Render.run(render); 
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(myengine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  groundObject.display();
  
 
  drawSprites();
  
 
}

function keyPressed()   //predefined function 
{
	  if (keyCode === UP_ARROW) 
	  {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-80});
		Matter.Body.setStatic(paperObject.body, false)
		
	  }
	  
	  if(keyCode === 32)
	  {

		Matter.Body.setPosition(paperObject.body,{x:50,y:450})
		Matter.Body.setStatic(paperObject.body, true)
	  }
}





