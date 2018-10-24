var mySong;
var analyzer;
var volhistory = [];

function preload() {
  // put preload code here
  mySong = loadSound("./assets/flowers.mp3");
  myImage = loadImage("./assets/film.png");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);

  image(myImage, 300, 100, 600, 650);
  mySong.play();
  analyzer = new p5.Amplitude();


}

function draw() {

  // put drawing code here
  fill(255);
  textFont('Arial Black')
  textSize(40);
  text('put your mouse on the machine', 300, 40);
  if (mouseX > 600 || mouseX < 300) {
    //stop
    mySong.pause();
  } else {
    //play
    if (mySong.isPlaying() == false) {
      mySong.loop();
    }
  }


  var volume = analyzer.getLevel();
  volhistory.push(volume);

  noFill();
  translate(0,height/2);
  for(var i=0; i< volhistory.length;i++){
  var a=random(-30,30);
  stroke(lerpColor(color('#EF5350'), color('#FDD835'), y));
  var y=map(volhistory[i],0,1,0,height/2);
  var y=y*a;

}
beginShape();
curveVertex(800,0);

curveVertex(2000,y+100);
curveVertex(width/2-15,0);
curveVertex(800,-y);

endShape();
beginShape();
curveVertex(800,-30);

curveVertex(2000,y+100);
curveVertex(width/2-15,-30);
curveVertex(800,-y);

endShape();


beginShape();
curveVertex(800,-60);

curveVertex(2000,y+100);
curveVertex(width/2-15,-60);
curveVertex(800,-y);

endShape();

beginShape();
curveVertex(800,-90);

curveVertex(2000,y+100);
curveVertex(width/2-15,-90);
curveVertex(800,-y);

endShape();



}
