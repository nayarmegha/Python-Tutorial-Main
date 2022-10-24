let snake;
let apple;
let w;
let h;
//let x;
//let y;
let gap =50;
let rez = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  snake = new Snake();
  w = floor(width / rez);
  h = floor(width / rez);
  frameRate(5);
}

//function appleLocation(){
// x = floor(w);
// y = floor(h);
//apple = createVector(x,y)
//}

function keyPressed(){
  
  if (keyCode == LEFT_ARROW){
    snake.setDir(-1,0)
  }
  
  else if(keyCode === RIGHT_ARROW){
        snake.setDir(1,0)

  }
   else if(keyCode === UP_ARROW){
        snake.setDir(0,-1)

  }
    else if(keyCode === DOWN_ARROW){
        snake.setDir(0,1)

  }
}

function draw() {
  scale(rez);
  background("rgb(217,217,231)");
  snake.update();
  snake.show();
  noStroke();
  fill("rgb(255,248,0)");
  rect(6,1,1,1,0.1)
}