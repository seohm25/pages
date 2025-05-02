let circleX;
let circleY;
let img;
let showImage = false; // 이미지 표시 여부

function preload() {
  img = loadImage('/Users/seohamin/Desktop/wksp/web/wksp/project2/images/photowrong.png'); // 경로는 html 기준 상대경로
}

function setup() {
  createCanvas(710, 400);
  background(10);
}

function draw() {
  background(10);

  if (showImage) {
    imageMode(CENTER);
    image(img, circleX, circleY, 100, 100);
  }
}

function mousePressed() {
  circleX = random(0, width);
  circleY = random(0, height);
  showImage = true; // 클릭 시 이미지 보이게
}

