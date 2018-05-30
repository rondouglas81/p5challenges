let sponge = [];
let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  normalMaterial();

  let b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function mousePressed() {
  let newSponge = [];
  for (let i = 0; i < sponge.length; i++) {
    let b = sponge[i];
    let newBoxes = b.split();
    newSponge = newSponge.concat(newBoxes);
  }

  sponge = newSponge;
}

function draw() {
  background(0);
  rotateX(angle);
  rotateY(0.4 + angle);
  rotateZ(0.1 + angle);

  for (let i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }

  angle += 0.01;
}
