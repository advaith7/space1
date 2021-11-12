var craft,craft1,craft2,craft3,craft4,iss;
var bg,issimg;
var hasDocked=false

function preload(){
  bg=loadImage("spacebg.jpg")
issimg=loadImage("iss.png")
craft1=loadImage("spacecraft1.png")
craft2=loadImage("spacecraft2.png")
craft3=loadImage("spacecraft3.png")
craft4=loadImage("spacecraft4.png")




}


function setup(){
  createCanvas(800,400);
craft=createSprite(280,240)
craft.addImage(craft1)
craft.scale=0.10

iss=createSprite(330,130)
iss.addImage(issimg)
iss.scale=0.25
}

function draw() {
  background(bg);  
craft.addImage(craft1)

if(!hasDocked){
  craft.x=craft.x+random(-1,1)

if(keyDown("UP_ARROW")){

craft.y=craft.y-2
}

if(keyDown("LEFT_ARROW")){
  craft.addImage(craft4)
  craft.x=craft.x-2
  }

  if(keyDown("RIGHT_ARROW")){
    craft.addImage(craft3)
    craft.x=craft.x+2
    }

    if(keyDown("DOWN_ARROW")){
      craft.addImage(craft2)
      }
    }
if(craft.y<=(iss.y+70)&&craft.x<=(iss.x-10)){
hasDocked=true
textSize(10)
fill("red")
text("Docking Completed",200,300)
}
drawSprites();
}