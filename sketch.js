
var ballon;
var Position;

function preload(){
  bg = loadImage("images/Bg.png")
}
function setup() {
  database = firebase.database();
  createCanvas(800,400);
  balloon = createSprite(400, 200, 50, 50);
  hball.addImage = "images/Had3.png";
    var balloonPosition = database.ref('balloon/hight');
    balloonPosition.on("value",readposition,showerror);

}

function draw() {
  background(bgImage); 
  
  if(keyDown(LEFT_ARROW)){
    updatehight(-10,0);
    
 }
 else if(keyDown(RIGHT_ARROW)){
     updatehight(10,0);
 }
 else if(keyDown(UP_ARROW)){
    updatehight(0,-10);
    
 }
 else if(keyDown(DOWN_ARROW)){
     updatehight(0,+10);
 }
 
  drawSprites();

}

function updatehight(x,y){
  database.ref('balloon/hight').set({
      'x' : hight.x + x,
      'y' : hight.y + y
  })
  
}

function readposition(){
hight = data.val();
balloon.x = hight.x
balloon.y = hight.y
}

function showerror(){
  console.log("error in writing to the dashbord");
}
