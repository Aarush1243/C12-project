var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg, leaveImg, orangeleaveImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaveImg = loadImage("leaf.png");
  orangeleaveImg = loadImage("orangeLeaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  applesGroup = new Group();
  leavesGroup = new Group();
  orangeleavesGroup = new Group();


}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  var r = Math.round(random (1,3));
  if(frameCount % 60 == 0){
    if(r == 1){
      spawnApples();
    }
    else if(r == 2){
      spawnLeaves(); 
    }
    else if(r == 3){
      spawnOrangeLeaves();
    }
  }
 
  drawSprites();
}

function spawnApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.velocityY = 4;

}

function spawnLeaves() {
  leave = createSprite(random(50, 350), 40, 10, 10);
  leave.addImage(leaveImg);
  leave.scale = 0.09;
  leave.velocityY = 3;

}

function spawnOrangeLeaves(){
  orangeleave = createSprite(random(50, 350), 40, 10, 10);
  orangeleave.addImage(orangeleaveImg);
  orangeleave.scale = 0.09;
  orangeleave.velocityY = 3;
}