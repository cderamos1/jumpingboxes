var surface1, surface2, surface3, surface4
var box;
var canvas;
var music;
var rightedge, leftedge, topedge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,575,180,25);
    surface1.shapeColor = "lightblue";
    surface2 = createSprite(300,575,180,25);
    surface2.shapeColor = "yellow";
    surface3 = createSprite(500,575,180,25);
    surface3.shapeColor = "pink";
    surface4 = createSprite(700,575,180,25);
    surface4.shapeColor = "lightgreen";

    //create box sprite and give velocity
    box = createSprite(random(20,750),540,30,30);
    box.shapeColor = "white";
    box.velocityX = 8;
    box.velocityY = 8;

    rightedge = createSprite(800,200,1,800); 
    leftedge = createSprite(0,200,1,800); 
    topedge = createSprite(200,0,800,1); 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(rightedge);
    box.bounceOff(leftedge);
    box.bounceOff(topedge);
    
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
      box.shapeColor = "lightblue";
      box.velocityX = 0;
      box.velocityY = 0;
    }
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
      box.shapeColor = "yellow";
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
      box.shapeColor = "pink";
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
      box.shapeColor = "lightgreen";
    }


    drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1Rect.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  return false;
}
}