/*
if-else문을 사용하여 학생의 점수에 따라 학점을 계산하고 출력하는 프로그램을 작성합니다.
*/

// 점수는 0 ~ 100 점 사이의 정수
let score = 50;

// 학점 계산
let grade = "";

// A: 90점 이상 100점 이하
if (score >= 90 && score <= 100) {
  grade = "A";
} else {
  // B: 80점 이상 90점 미만
  if (score >= 80 && score < 90) {
    grade = "B";
  } else {
    // C: 70점 이상 80점 미만
    if (score >= 70 && score < 80) {
      grade = "C";
    } else {
      // D: 60점 이상 70점 미만
      if (score >= 60 && score < 70) {
        grade = "D";
      } else {
        // F: 60점 미만
        if (score < 60) {
          grade = "F";
        }
      }
    }
  }
}

console.log(`${score}: ${grade}학점`); // 79: C학점
