var grid = 50;
var width = 1366;
var carGroup1,logGroup1,logGroup2;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2, logAnimation1,logAnimation2, playerAnimation;
var school,bottomGrass1,road;
function preload()
{
  carAnimation1 = loadAnimation("images/car1.png");
  carAnimation2 = loadAnimation("images/car2.png");
  //logAnimation1 = loadAnimation("images/log1.png");
  logAnimation2 = loadAnimation("images/log2.png");
  playerAnimation = loadAnimation("images/Player-03.png");
  
}
function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
}

function draw() {
  background(250,250,250);

  //grasses where player can rest
  for(var i=0;i<6;i++){
   bottomGrass1=createSprite(683,height-50-(i*400),width,grassHeight);
  if(i%2===0){//adding road
   road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
  road.shapeColor="black"
  }
  bottomGrass1.shapeColor="green"
  }
  
  //To create rows of car
   for(var i=0;i<40;i++){
   cars=new Car(2)
   carGroup1.add(cars.spt);
   }

   //To create rows of log
   for(var i=0;i<40;i++){
   logs=new Log(2)
   logGroup1.add(logs.spt);
   
    }

   //making the logs reapper
   for(i=1;i<logGroup1.lenght;i++){
   if(logGroup1[i].x<50)
   {
    logGroup1[i].x=width;
   }
     }

  //making the cars reapper
  for(i=1;i<carGroup1.lenght;i++){
    if(carGroup1[i].x<0)
    {
     carGroup1[i].x=width;
    }
      }

      player=new Player(width/2,height-50);
      keyPressed();
      translate(0,-player.spt.y+height-150);

 
  //if player Touching the car then reset the x and y of the player
     if(carGroup1.isTouching(player.spt)){
      player.spt.x = width/2
      player.spt.y = height-50
     }

  //
   if(logGroup1.isTouching(player.spt)){
     player.spt.x = player.spt.x-3
   }
   else if((player.spt.y>height-1550 && player.spt.y<height-1300) ||
           (player.spt.y<height-500 && player.spt.y>height-850) ||
           (player.spt.x<0) ||
           (player.spt.x>width))

           player.spt.x = width/2
           player.spt.y = height-75

   drawSprites();
}

function keyPressed(){
 if(keyCode == UP_ARROW){
  player.move(0,-20);
} else if(keyCode == DOWN_ARROW){
  player.move(0,2);
} else if(keyCode == LEFT_ARROW){
  player.move(-2,0);
} else if(keyCode == RIGHT_ARROW){
  player.move(2,0);
}
}
