var dog,sadDog,happyDog;
var foodS,foodobj,milk,feedDog,addMilk;
var lastFed
//declare variables  database,foodStock, fedTime,lastFed,feed,addFood;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
  //no need for this milk=loadImage("Milk.png")
}

function setup() {

  database=firebase.database();
  createCanvas(1000,400);

  dog = createSprite(800,180,1,1) 
  dog.addImage(sadDog);
  dog.scale=0.2;
 
  //error food = createSprite(200,200,20,20);
  foodObj = new Food(); //corrected
  //These lines missing
  /*
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  */
  feed = createButton("feed the dog ");
  feed.position (700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods)

}

function draw() {
  background(46,139,87);

  //error food.display();
  foodObj.display(); //corrected

  
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  
  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  
  //missed the following lines
  /*database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  }) */
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}