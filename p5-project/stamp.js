var r, g, b;

function setup() {
  // put setup code here
    createCanvas(600,900);
    background("#800000");
    r= random(255);
    g= random(255);
    b= random(255);
}

function draw() {background(r, g, b);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100);
  pop();

  translate(width / 4, 0, 0);
  ambientMaterial(250);
  sphere(120, 64);
   
                 
    textSize(30);            
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(CENTER);
    text("Hey!", 50, 50);
 
}

function mousePressed(){
    fill(r, g, b);
    ellipse(mouseX, mouseY, 40, 40);
    r= random(255);
    g= random(255);
    b= random(255);
}

