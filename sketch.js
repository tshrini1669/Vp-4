//Create variables here
var foodStock, foodCount;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
background("yellow");

  foodStock=database.ref('foodCount');
  foodStock.on("value", readStock);

  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
  if(keyWentDown(UP_ARROW)){
    foodObj.display();
    writeStock(foodS);
    dog.addImage("dogHappy");
  }
  if(foodS == 0){
    dog.addImage(happyDog)
    milkbottle2.visible=false;
  }else{
    dog.addImage(sadDog);
    milkbottle2.visible=true;
  }
  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(SadDog);
  }
  if(gameState==1){
    dog.addImage(happyDog);
    dog.scale=0.175;
    dog.y=250;
  }
  if(gameState===2){
    dog.addImage(sadDog);
    dog.scale=0.175;
    milkbottle2.visible=false;
    dog.y=250;
  }
  var Bath=createButton("I Want to take bath");
  Bath.position(580,125);
  if(Bath.mousePressed(function({
    gameState=3
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===3){
    dog.addImage(washroom);
      dog.scale=1;
      milkbottle2.visible=false
  }

  var Sleep=createButton("I am very sleepy");
  Bath.position(710,125);
  if(Sleep.mousePressed(function({
    gameState=4
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===4){
    dog.addImage(bedroom);
      dog.scale=1;
      milkbottle2.visible=false;
  }
  
  var Play=createButton("Let's Play!");
  Play.position(710,125);
  if(Play.mousePressed(function({
    gameState=5
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===5){
    dog.addImage(livingroom);
      dog.scale=1;
      milkbottle2.visible=false;
  }
  
  var Playingarden=createButton("Let's Play in park");
  Bath.position(710,125);
  if(Playingarden.mousePressed(function({
    gameState=6
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===6){
    dog.addImage(garden);
      dog.scale=1;
      milkbottle2.visible=false;
  }

  var button=createButton("Feed The Dog");
 button.position(400,125);

 if(button.mousePressed(function(){
   foodS=foodS-1;
   gameState=1;
   database.ref('/').update({'gameState':gameState})
 }))

 var addFood=createButton("Add Food")
 addFood.position(500,125);

 if(addFood.mousePressed(function(){
   foodS=foodS+1;
   gameState=2;
   database.ref('/').update({'gameState':gameState})
 }))
  drawSprites();
  //add styles here
  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    foodCount:x
  })

}
function update(state){
  database.ref('/').update({
    gameState:state
  });
}

