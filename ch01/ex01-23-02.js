/*
국어, 영어, 수학 점수의 총점과 평균을 출력
*/

// 1. 원시형으로 선언
const userName = "원시핑";
let kor = 100;
let eng = 90;
let math = 85;
let sum = kor + eng + math;
let avg = sum / 3;

console.log("========== 원시 선언 ==========");
console.log(userName, "의 총점:", sum);
console.log(userName, "의 평균:", avg);

// 2. 객체로 선언
const score = new Object();

// 점 표기법
score.userName = "객체핑";
score.kor = 100;
score.eng = 90;
score.math = 85;

// 대괄호 표기법
score["sum"] = score.kor + score.eng + score.math;
score["avg"] = score["sum"] / 3;

console.log("========== 객체 선언 ==========");
console.log(score.userName, "의 총점:", score["sum"]);
console.log(score.userName, "의 평균:", score["avg"]);
