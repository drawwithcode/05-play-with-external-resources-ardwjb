var mySong;
var analyzer;
var volhistory = [];

function preload() {
  // put preload code here
  mySong = loadSound("./assets/flowers.mp3");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(230);

  mySong.play();
  analyzer = new p5.Amplitude();


}

function draw() {

  // put drawing code here
  fill(255);
  textFont('Arial Black')
  textSize(40);
  text('move your mouse', 300, 40);
  if (mouseX < width / 2) {
    mySong.pause();
  } else {
    if (mySong.isPlaying() == false) {
      mySong.play();
      // mySong.loop();
    }
  }

  if (mySong.isPlaying() == false) {

  }
  mySong.play();




  var volume = analyzer.getLevel();
  volhistory.push(volume);

  noFill();
  translate(0, height / 2);
  for (var i = 0; i < volhistory.length; i++) {
    var a = random(-10, 10);
    stroke(lerpColor(color('#EF5350'), color('#FDD835'), y));
    var y = map(volhistory[i], 0, 1, 0, height / 2);
    var y = y * a;

  }
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(width / 4, y);
  curveVertex(width / 2, 0);
  curveVertex(width * 3 / 4, -y);
  curveVertex(width, 0);
  curveVertex(width, 0);
  endShape();

  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(width / 4, y * 2);
  curveVertex(width / 2, 0);
  curveVertex(width * 3 / 4, -y * 2);
  curveVertex(width, 0);
  curveVertex(width, 0);
  endShape();

  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 0);
  curveVertex(width / 4, y * 3);
  curveVertex(width / 2, 0);
  curveVertex(width * 3 / 4, -y * 3);
  curveVertex(width, 0);
  curveVertex(width, 0);
  endShape();





}
