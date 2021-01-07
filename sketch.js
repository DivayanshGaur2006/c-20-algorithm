var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;

  movingrect = createSprite(800, 400, 80, 90);
  movingrect.shapeColor = "red";
  movingrect.debug = true;

  
}

function draw() {
  background("black");  
movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if (movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
  fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
  movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
  fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2


)
{
  movingrect.shapeColor = "brown";
  fixedrect.shapeColor = "brown";

}
else
{
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green ";

}




  
  drawSprites();
}