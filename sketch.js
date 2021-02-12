
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new roof(350,100,300,30);
World.add(world,roof); 
 object1=(300,300) 
 object2=(300,300)
 object3=(300,300)
 object4=(300,300)
 object5=(300,300) 

 rope1=new rope(object1.body,roof.body,-100,0) 
 World.add(world,rope1);
 rope1=new rope(object2.body,roof.body,-50,0) 
 World.add(world,rope2);
 rope1=new rope(object3.body,roof.body,0,0) 
 World.add(world,rope3); 
 rope1=new rope(object4.body,roof.body,+100,0) 
 World.add(world,rope4); 
 rope1=new rope(object5.body,roof.body,+50,0) 
 World.add(world,rope5); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(white);
  Engine.update(engine) 

roof.display();
object1.display();
object2.display(); 
object3.display(); 
object4.display(); 
object5.display(); 
rope1.display(); 
rope2.display(); 
rope3.display(); 
rope4.display(); 
rope5.display();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce()
	}
}

