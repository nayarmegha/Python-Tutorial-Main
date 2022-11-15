let snake;
let apple;
let turn = 0; // this manages what question we are on
let correctAnswer = [66, 67, 65]; // B, C, A
let applePos = [[6, 0], [6, 5], [2, 5], [-1,-1]];
let youLose = false;
let xDir = 1;
let yDir = 0;
let w;
let h;

let gap = 50;
let rez = 20;

function setup() {
  createCanvas(800,400);
  snake = new Snake();
  w = floor(width / rez);
  h = floor(width / rez);
  frameRate(4);
}

function keyPressed(){
  
  if (keyCode == 65){ //keycode for A
    xDir = -1;
    yDir = 0;
  }
  
  else if(keyCode === 66){ //keycode for B
    xDir = 1;
    yDir = 0;

  }
   else if(keyCode === 67){ //keycode for C
     xDir = 0;
     yDir = 1;
  }
    else if(keyCode === 68){ //keycode for D
      xDir = 0;
      yDir = -1;
  }
  snake.setDir(xDir, yDir)
  
  if (keyCode != correctAnswer[turn]) {
    youLose = true;
  }
}

function draw() {
  
  if (snake.snakePos.x == applePos[turn][0] && snake.snakePos.y == applePos[turn][1]){
      snake.setDir(0, 0);   
      turn += 1;
  }


  scale(rez);
  background("rgb(217,217,231)");
  snake.update();
  snake.show();
  noStroke();
  fill("rgb(255,248,0)");
  rect(applePos[turn][0], applePos[turn][1],1,1,0.1)
  
  fill("rgb(114,117,134)");
  rect(20,0,20,20);
  fill("white");
  textFont('Monospace');
  textSize(1);
  
  if (turn == 0){
    text("What is the symbol used", 21, 3);
    text("to make a python comment?", 21, 4);
    text("A. //", 22, 7.1);
    text("B. #", 22, 8.4);
    text("C. <", 22, 9.5);
    
  }
  
  else if (turn == 1) { 
  
  text("Which of the following is", 21, 3);
  text("an application of comments", 21, 4);
  text("in python?", 21, 5);
  text("A.Store datatypes", 22, 7.1);
  text("B.Printing statements", 22, 8.4);
  text("C.Debugging", 22, 9.5);
  
  }
  
  else if (turn == 2){
  text("Which of the following is", 21, 3);
  text("a false statement:", 21, 4);
  text("A.Python executes your", 22, 7.1);
  text("comments", 22, 8.3);
  text("B.Comments make your code", 22, 9.5);
  text("readable", 22, 10.4);
  text("C.Comments help you", 22, 11.6);
  text("debug your code", 22, 12.5);
  }
  
  
  else if (turn == 3 && !youLose){
  fill("white")
  text("YOU WON!!", 20, 7.1)
  }
  
  if(youLose) {
    turn = 3
    text("YOU LOSE!!", 16, 7.1)
  }
}