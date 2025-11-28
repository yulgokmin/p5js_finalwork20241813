function setup() {
  createCanvas(600, 400);
}

let r = 10 , g = 10, b = 60; // 배경화면 색 설정

let blink = true; // 눈 감고 뜨는 기능

let mouth = true; // 하품하는 기능

function draw() {

  background(r, g, b);
  if(mouseIsPressed){
    if(r < 135){
      r += 0.2;
    }
    if(g < 205){
      g += 0.2;
    }
    if(b < 235){
      b += 0.2;
    }    
  }
  
  
  if(r+g+b < 340){
    noStroke();
    fill("#8F8888");
    circle(50, 50, 150);
    
    fill('#E4E0E0');
    circle(55, 90, 40);
    circle(95, 80, 15);
    
    strokeWeight(5);
    stroke('#E7C820');
    point(500, 70);
    point(450, 200);
    point(550, 170);
    point(150, 160);
    point(70, 250);
    point(165, 30);  
  }
  
  if(r+g+b >= 520){
    noStroke();
    fill('#FFEB3B');
    circle(50, 50, 150);
  }
  
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

  
  //얼굴 세부 -- 눈깜빡이는 효과 추가
  if(blink == true){
    stroke(0);
    strokeWeight(4);
    if(mouth == true){
    line(245, 170, 285, 170);
    line(315, 170, 355, 170);
    }
    
   } 
  
  else{
  fill(255);
  ellipse(265, 170, 40, 30);
  ellipse(335, 170, 40, 30); //흰자위
  
  fill(0);
  circle(270, 170, 17);
  circle(330, 170, 17); // 눈동자
   }
  
  if(mouth){
  noFill()
  stroke(0);
  strokeWeight(5);
  arc(300, 220, 25, 20, radians(30), radians(150));
  }
  else{
  noStroke();
  fill('#C22323');
  circle(300, 230, 30);
  
  stroke(0);
  strokeWeight(3);
  line(285, 170, 265, 160);
  line(315, 170, 335, 160); // 윗쪽 찡그림
    
  line(265, 180, 285, 170);
  line(335, 180, 315, 170); // 아래쪽 찡그림
    
  line(265, 170, 285, 170);
  line(315, 170, 335, 170); // 중앙 부분
    
  
  
  }   // 입 부분 -- 하품하는 기능 구사
  
  if(mouth){
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(265, 160, 45, 15, radians(200), radians(340));
  arc(335, 160, 45, 15, radians(200), radians(340));
  }// 눈썹 -- 하품하는 순간에는 사라져야됨
  
  line(300, 190, 290, 210);
  line(290, 210, 300, 210); // 코 --- 이거는 불변 
  
} // 여기까진 draw 함수

  
function keyPressed(){
    
    if(key === 'a'){
      mouth = false;
    }
  
    if(key === 'b'){
      mouth = true;
    }// 눈 감았다 뜨는 기능 on / off
  
    if(key === 'c'){
      blink = false;
    } // 하품하는 기능
  
    if(key === 's');
    saveGif('20241813 황채민_과제 3', 10);
}
