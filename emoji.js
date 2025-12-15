// This code was created with inspiration from Linus Sönnerhed's example

function setup() {
  createCanvas(400, 400);
}

let x = 200;
let y = 200;

function mrGrumpy(x, y) {
  // face
  push();
  fill("yellow");
  circle(x, y, 150);
  pop();

  // eyes (white)
  push();
  fill("white");
  circle(x - 25, y - 20, 25);
  circle(x + 25, y - 20, 25);
  pop();

  // pupils
  push();
  fill("black");
  circle(x - 25, y - 20, 15);
  circle(x + 25, y - 20, 15);
  pop();

  // angry eyebrows
  push();
  stroke(0);
  strokeWeight(4);
  line(x - 45, y - 45, x - 10, y - 35);
  line(x + 10, y - 35, x + 45, y - 45);
  pop();

  // grumpy mouth
  push();
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(x, y + 35, 50, 30, PI, 0);
  pop();
}

function draw() {
  background(0, 220, 250);
  mrGrumpy(x, y);
}
