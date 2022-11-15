//creating a class for snake head
class Snake {
  
  constructor(){
    //createing a 2D vector with origin at 0,0
    this.snakePos = createVector(0,0);
    this.xdir = 0;
    this.ydir = 0;
  }
  
  setDir(x,y){ //setter for x y values of snake direction
    this.xdir = x;
    this.ydir = y;
  }
  
  update(){ //setter for x y coord pos of snake 
    this.snakePos.x += this.xdir; //update x pos of snake based on x dir  
    this.snakePos.y += this.ydir;
  }
  
  show(){
    fill("rgb(64,55,114)")
    noStroke();
    if (abs(xDir) == 1 && yDir == 0) { // Going left or right
      rect(this.snakePos.x, this.snakePos.y, 1+turn, 1, 0.1)
    }
    else { // going up or down
      rect(this.snakePos.x, this.snakePos.y, 1, 1+turn, 0.1)
    }
  }
}