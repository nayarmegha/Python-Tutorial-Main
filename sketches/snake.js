//creating a class for snake head
class Snake {
  
    constructor(){
      //the snake body is accounted for as an array, with its head being the first element
      this.body =[];
      //createing a 2D vector with origin at 0,0
      this.body[0] = createVector(0,0);
      this.xdir = 0;
      this.ydir = 0;
    }
    
    setDir(x,y){
      this.xdir = x;
      this.ydir =y;
    }
    update(){
      this.body[0].x += this.xdir;
      this.body[0].y += this.ydir;
    }
    
    show(){
      fill("rgb(64,55,114)")
      noStroke();
      rect(this.body[0].x, this.body[0].y, 1, 1, 0.1)
    }
  }