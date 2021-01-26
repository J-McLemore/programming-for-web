let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color name", "purple");
let grid = undefined;
function setup() {
     createCanvas(1000, 800);
     background("#add8e6");
     grid = loadImage("images/100px_grid.png");
}
function draw() {
     //background
     fill("#FFFFF");
     stroke(stroke2);
     ellipse(500, 900, 1400, 1400);
     //arms
     fill("#f1f1f1");
     stroke(stroke1);
     strokeWeight(20);
     //left arm
     ellipse(280, 350, 200, 100);
     //right arm
     ellipse(720, 350, 200, 100);
    // snowman legs
    fill("#f1f1f1");
    stroke(stroke1);
    strokeWeight(20);
    //left leg
    ellipse(400, 650, 150, 400);
    //right leg
    ellipse(600, 650, 150, 400);
    //body
    ellipse(500, 450, 350, 400);
    //head 
    ellipse(500, 200,200);
   //eyes
    stroke(0);
    strokeWeight(25);
    point(475, 180);
    point(525, 180);
    //mouth
    noFill();
    strokeWeight(10);
    arc(500, 225, 100, 100, 0, PI);
}