function setup() {
  createCanvas(600, 400);
 
}

function draw() {
  background("#A4E9E9");
  //배경색상 설정
  
  stroke(255);
  strokeWeight(0);
  fill('#b19ef0');
  triangle(0, 0, 0, 400, 600, 400);
  //배경화면 보라색 큰 삼각형
  
  
  
  
  strokeWeight(5);
  stroke(200);
  
  stroke(255);
  line(420, 0, 420, 150);
  line(500, 0, 500, 220);
  line(350, 0, 350, 230);
  //위에서 내려오는 선
  
  fill('#207AE7');
  circle(500, 500, 450);
  fill('#2116D8');
  circle(500, 500, 350);
  //오른쪽 아래 큰 원
  
  fill('#8BEE92');
  triangle(0, 0, 0, 180, 260, 0);
  //위쪽 삼각형
  
  fill('#60c1c3 ');
  circle(350, 230, 65); 
  strokeWeight(3);
  fill('#006694');
  ellipse(500, 220, 20, 20);
  fill('#6E107E');
  circle(420, 150, 35);  
  //작은 원 3개

  
  fill('#c0ed4e');
  arc(0, 400, 400, 400, radians(330), radians(360));
  fill('#4eb8ed');
  arc(0, 400, 350, 350, radians(300), radians(330));
  fill('#13B19D');
  arc( 0,400, 300, 300, 0, radians(330));
  fill('#e8f09e');
  circle(0, 400, 200);
  //아래쪽 호 구역
  
  
  fill('#ffffff');
  triangle(120, 170, 140, 170, 130, 150);
  triangle(250, 250, 270, 250, 260, 230);
  triangle(235, 360, 255, 360, 245, 340);
  triangle(180, 275, 200, 275, 190, 255);
  triangle( 50, 220, 70, 220, 60, 200);
  //하얀 삼각형들
 saveCanvas();
}
