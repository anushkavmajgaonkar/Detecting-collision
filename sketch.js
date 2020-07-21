var fixedrect ; movingrect 

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400,200,50,50);
  movingrect = createSprite(600,200,50,50);
  fixedrect.shapeColor="Blue";
  movingrect.shapeColor="red"; 
}

function draw() {
  background("White");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 ){
    fixedrect.shapeColor="Purple";
    movingrect.shapeColor="Purple"; 

  }
  else{
    fixedrect.shapeColor="Blue";
    movingrect.shapeColor="red"; 
  }

 
  drawSprites();
}