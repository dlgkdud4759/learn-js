/*
switch 문을 사용해 학점을 계산하고 출력하세요.
*/

// 점수는 0 ~ 100 점 사이의 정수
let score = 79;

// 학점 계산
let grade = "";

// 점수에서 10의 자리만 꺼내기
// 79 / 10 = 7.9
// parseInt(7.9) => 7

switch (parseInt(score / 10)) {
  // A: 90점 이상 100점 이하
  case 10:
  case 9:
    grade = "A";
    break;

  case 8: // B: 80점 이상 90점 미만
    grade = "B";
    break;
  case 7: // C: 70점 이상 80점 미만
    grade = "C";
    break;
  case 6: // D: 60점 이상 70점 미만
    grade = "D";
    break;
  default: // F: 60점 미만
    grade = "F";
}

console.log(`${score}: ${grade}학점`); // 79: C학점
