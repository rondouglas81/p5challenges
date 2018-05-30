class Box {
  constructor(x, y, z, r) {
    this.pos = createVector(x, y, z);
    this.r = r;
  }

  split() {
    let boxes = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          let newRadius = this.r / 3;
          let sum = abs(i) + abs(j) + abs(k);
          if (sum > 1) {
            let b = new Box(
              this.pos.x + i * newRadius,
              this.pos.y + j * newRadius,
              this.pos.z + k * newRadius,
              newRadius
            );
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    box(this.r);
    pop();
  }
}
