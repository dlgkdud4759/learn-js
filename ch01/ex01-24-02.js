/*
JSON 표기법 - 국어, 영어, 수학 점수의 총점과 평균을 출력
*/

let score = {
  userName: "객체핑",
  kor: 100,
  eng: 90,
  math: 85,
};

score.sum = score.kor + score.eng + score.math;
score.avg = score.sum / 3;

console.log(score.userName, "의 총점:", score.sum);
console.log(score.userName, "의 평균:", score.avg);
