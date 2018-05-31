class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speedX = 0;
    this.speedY = 1;
    this.length = 0;
    this.tail = [];
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.length >= 1) {
      this.tail[this.length - 1] = createVector(this.x, this.y);
    }
    this.x += this.speedX * scale;
    this.y += this.speedY * scale;

    this.x = constrain(this.x, -width / 2, width / 2 - scale);
    this.y = constrain(this.y, -height / 2, height / 2 - scale);
  }

  show() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    rect(this.x, this.y, scale, scale);
  }

  dir(vx, vy) {
    this.speedX = vx;
    this.speedY = vy;
  }

  eat(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.length++;
      return true;
    }
    return false;
  }

  live() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);

      if (d < 1) {
        console.log('Your snake died!');
        this.length = 0;
        this.tail = [];
      }
    }
  }
}
