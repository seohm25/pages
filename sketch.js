let cursorImg;

function preload() {
  cursorImg = loadImage('Untitled_Artwork copy 2.png'); // 커서 이미지 불러오기
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor(); // 기본 커서 숨기기 (안 해도 스타일에서 처리됨)
}

function draw() {
  clear(); // 배경 지우기 (커서가 잔상 없이 따라다니게 함)
  image(cursorImg, mouseX, mouseY, 40, 40); // 이미지 크기 조절 가능
}
