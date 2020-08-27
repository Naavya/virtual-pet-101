var dog,happydog,foodstock,foodS
var database
function preload()
{
  dogImg = loadImage("dog.png");
  happydogImg=loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  rectMode(CENTER)
  dog=createSprite(250,250,10,10)
  dog.addImage(dogImg)
  dog.scale=0.5
  foodstock=database.ref('Food')
  foodstock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydogImg)
}
  drawSprites();
  fill("red")
  text ("PRESS THE UP ARROW KEY TO FEED THE DOG MILK",100,40)
  text("FOOD REMAINING:"+foodS,250,200)
  fill("red")
  
}

function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



