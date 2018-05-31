let maxIterations = 100;

let centerX = 0;
let centerY = 0;
let scale = 2.5;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
}

function mousePressed() {
  centerX = map(mouseX, 0, width, centerX - scale, centerX + scale);
  centerY = map(mouseY, 0, height, centerY - scale, centerY + scale);
  scale *= 0.5;
  maxIterations += 100;
}

function draw() {
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, centerX - scale, centerX + scale);
      let b = map(y, 0, height, centerY - scale, centerY + scale);
      let ca = a;
      let cb = b;
      let n = 0;

      while (n < maxIterations) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;

        if (a * a + b * b > 16) {
          break;
        }

        n++;
      }

      let bright = map(n, 0, maxIterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      if (n === maxIterations) {
        bright = 0;
      }

      var pixel = (x + y * width) * 4;
      pixels[pixel + 0] = bright;
      pixels[pixel + 1] = bright;
      pixels[pixel + 2] = bright;
      pixels[pixel + 3] = 255;
    }
  }

  updatePixels();
}
