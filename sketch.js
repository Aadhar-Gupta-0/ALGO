// Interactive axis-aligned bounding box (AABB) collision visualizer.
var movingRect, fixedRect, isPointerMode = true;
var collisions = 0, wasOverlapping = false;
function setup() {
  var canvas = createCanvas(800, 410);
  canvas.parent('demo');
  fixedRect = createSprite(470, 210, 145, 120);
  movingRect = createSprite(180, 180, 130, 95);
}
function mouseMoved() { isPointerMode = true; }
function touchMoved() { isPointerMode = true; return false; }
function keyPressed() {
  if ([37, 38, 39, 40].indexOf(keyCode) !== -1) isPointerMode = false;
  if (key === 'r' || key === 'R') { collisions = 0; wasOverlapping = false; }
}
function draw() {
  background(245, 248, 252);
  if (isPointerMode && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    movingRect.position.x = mouseX;
    movingRect.position.y = mouseY;
  } else if (!isPointerMode) {
    if (keyIsDown(LEFT_ARROW)) movingRect.position.x -= 4;
    if (keyIsDown(RIGHT_ARROW)) movingRect.position.x += 4;
    if (keyIsDown(UP_ARROW)) movingRect.position.y -= 4;
    if (keyIsDown(DOWN_ARROW)) movingRect.position.y += 4;
  }
  movingRect.position.x = constrain(movingRect.position.x, movingRect.width / 2, width - movingRect.width / 2);
  movingRect.position.y = constrain(movingRect.position.y, movingRect.height / 2, height - movingRect.height / 2);
  const overlapping = rectanglesOverlap(
    { x: fixedRect.position.x, y: fixedRect.position.y, width: fixedRect.width, height: fixedRect.height },
    { x: movingRect.position.x, y: movingRect.position.y, width: movingRect.width, height: movingRect.height }
  );
  if (overlapping && !wasOverlapping) collisions++;
  wasOverlapping = overlapping;
  fixedRect.shapeColor = overlapping ? color(255, 199, 93) : color(87, 111, 233);
  movingRect.shapeColor = overlapping ? color(250, 83, 111) : color(55, 181, 144);
  drawSprites();
  noStroke(); fill(25, 40, 65); textSize(18);
  text(overlapping ? 'COLLISION DETECTED' : 'NO COLLISION', 18, 30);
  textSize(13); text('Collision entries: ' + collisions, 18, 52);
  fill(255, 255, 255, 210); rect(16, height - 45, 290, 28, 6);
  fill(45, 55, 70); textSize(12); text('AABB: overlapping along X AND Y', 25, height - 26);
}
