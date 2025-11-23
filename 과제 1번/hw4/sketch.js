let startTime;
let xa = 0, ya = 0;
let xb = 600, yb = 400;
let xc = 0,  yc = 400;  
let t2speed;

function setup() {
  createCanvas(600, 400);
  startTime = millis();
  t2speed = random(0.02, 0.08);
  saveGif('20241813 황채민_과제 4',8.3);
}

function draw() {
  background("#A4E9E9");
  stroke(255);
  strokeWeight(0);
  fill('#b19ef0');

  let moveTime = millis() - startTime;

  if (moveTime > 2000 && moveTime < 5000) {
    if (ya < 200) {        
      ya += 1.5;
    }
    if (xb < 750) {  
      xb+= 2;
    }
  }
  else if (moveTime >= 5000 && moveTime < 7000) {
    if (ya < 400) {
      ya += 2;
    }if (xb > 0) {
      xb -= 3;   
    }
    if (yb < 400) {
      yb += 1.5;
    }
    if (yc < 450) {
      yc += 1;
    } // 삼각형 무빙 좌우로 간단하게라도
  }
  triangle(xa, ya, xb, yb, xc, yc); // 뒷배경 삼각형 움직이기
  
  fill('#ffffff');
  let t1 = frameCount * 0.04;  
  let t2 = frameCount * t2speed;
  let t3 = frameCount * 0.02;
  
  let move1 = sin(t1) * 5;  
  let move2 = cos(t1) * 3;
  let move3 = sin(t1)* 2;
  let move4 = sin(t2) * 4;
  
  triangle(320 + move1, 300+move1, 340+move1, 300+move1, 330+move1, 280+move1);
  triangle(235+move2, 360, 255+move2, 360, 245+move2, 340);
  triangle(120+move3, 170+move2, 140+move3, 170+move2, 130+move3, 150+move2);
  triangle(250+move1, 250, 270+move1, 250, 260+move1, 230);
  triangle(180+move4, 275+move3, 200+move4, 275+move3, 190+move4, 255+move3);
  triangle(50+move4, 220, 70+move4, 220, 60+move4, 200);
    
  let colorNum = (sin(t3) + 1) / 2;  
  
  let color1 = color(72, 174, 171);    
  let color2 = color(40, 110, 220);
  
  let bigcolor = lerpColor(color1, color2, colorNum);
  fill(bigcolor);
  
  strokeWeight(5);
  circle(500, 500, 450);  
  
  let color3 = color(101, 191, 227);
  let color4 = color(140, 230, 255);
  
  let smallcolor = lerpColor(color3, color4, colorNum);
  fill(smallcolor);
  
  circle(500, 500, 350);
  //오른쪽 아래 큰 원
  
  let color5 = color(142, 230, 120);
  let color6 = color(95, 215, 170); 
  
  let triColor = lerpColor(color5, color6, colorNum);
  fill(triColor);
  
  triangle(0, 0, 0, 180, 260, 0);
  //위쪽 삼각형
  
  strokeWeight(5);
  stroke(200);
  
  stroke(255);
  line(420, 0, 420, 150);
  line(500, 0, 500, 220);
  line(350, 0, 350, 230);
  //위에서 내려오는 선
  
  fill('#60c1c3 ');
  let round1 = 65 + sin(t1)*5;
  circle(350, 230, round1); 
  
  strokeWeight(3);
  fill('#006694');
  let round2 = 20 + sin(t3)*3;
  ellipse(500, 220, round2);
  
  fill('#6E107E');
  let round3 = 35 + cos(t1)*3.5;
  circle(420, 150, round3);  
  //작은 원 3개
  
  fill('#c0ed4e');
  arc(0, 400, 400, 400, radians(330), radians(360));
  fill('#4eb8ed');
  arc(0, 400, 350, 350, radians(300), radians(330));
  fill('#13B19D');
  arc(0, 400, 300, 300, 0, radians(330));
  fill('#e8f09e');
  circle(0, 400, 200);
  
}
