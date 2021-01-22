function setup() {
    createCanvas(400, 400);
  }
 
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        noStroke();
    }  
    ellipse(mouseX, mouseY, 80, 80);
  }
 
function mouseReleased(){
        draw = false;
  }





