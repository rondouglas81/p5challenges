class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = width;
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    var screenX = map(this.x / this.z, 0, 1, 0, width);
    var screenY = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(screenX, screenY, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, screenX, screenY);
  }
}
