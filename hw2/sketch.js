function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#9CE3F6");
  
  // 1. 기본적인 형태 part
  
  //아래 군복 상의 부분
  noStroke();
  fill("#496441");
  quad(120, 400, 120, 370, 300, 300, 300, 400);
  quad(300, 400, 300, 300, 480, 370, 480, 400);
  
  //목 부분
  fill('#EBB99A');
  circle(300, 300, 70);
  rect(265, 245, 70, 50);
  
  //얼굴 부분
  circle(300, 170, 180);
  
  //모자 부분
  fill("#496441");
  arc(300, 130, 170, 160, radians(180), radians(360));
  
  strokeWeight(5);
  stroke("#496441");
  line(150, 127, 220, 127);
  
  //계급장 부분
  fill('#5AD658');
  square(282, 77, 36);
  strokeWeight(3);
  stroke(0);
  line(292, 88, 309, 88);
  line(292, 93, 309, 93);
  line(292, 98, 309, 98);
  line(292, 103, 309, 103);
  
  // 2.디테일 추가 part
  
  //상의 지퍼 추가
  noStroke();
  fill('#26361B');
  rect(291, 340, 18, 140);

  //상의 디지털 무늬
  fill('#212723');
  square(240, 350, 10);
  square(170, 370, 8);
  rect(205, 385, 20, 6);
  square(330, 340, 8);
  square(360, 373, 9);
  square(410, 359, 7);
  
  fill("#CFC1AB");
  square(235, 376, 9);
  square(205, 350, 8);
  rect(320, 370, 5, 15);
  square(450, 370, 7);
  
  fill('#3D9C3A');
  square(150, 385, 7);
  square(270, 360, 10);
  square(380, 370, 8);
  square(340, 330, 6);
  
  //모자 디지털 무늬
  fill('#212723');
  square(240, 100, 7);
  rect(350, 90, 5, 15);
  square(290, 60, 7);
  
  fill("#CFC1AB");
  square(260, 70, 8);
  square(320, 60, 6);
  square(330, 90, 7);
  
  fill('#68A566');
  square(250, 90, 6);
  square(270, 110, 8);
  square(344, 111, 7);

  
  //얼굴 세부
  fill(255);
  ellipse(265, 170, 40, 30);
  ellipse(335, 170, 40, 30); //흰자위
  
  fill(0);
  circle(270, 170, 17);
  circle(330, 170, 17); // 눈동자
  
  noFill()
  stroke(0);
  strokeWeight(5);
  arc(300, 220, 25, 20, radians(30), radians(150)); // 입
  
  strokeWeight(2);
  arc(265, 160, 45, 15, radians(200), radians(340));
  arc(335, 160, 45, 15, radians(200), radians(340)); // 눈썹
  
  line(300, 190, 290, 210);
  line(290, 210, 300, 210); // 코
  
  //기타 부분
    
}
