let s;
let food;

let scale = 20;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  placeNewFood();
}

function draw() {
  translate(width / 2, height / 2);
  background(0);
  if (s.eat(food)) {
    placeNewFood();
  }
  s.live();
  s.update();
  s.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scale, scale);
}

function placeNewFood() {
  var cols = floor(width / scale);
  var rows = floor(height / scale);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scale).sub(width / 2, height / 2);
}

function mousePressed() {
  s.length++;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
