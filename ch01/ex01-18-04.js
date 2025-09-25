/*
지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
연산자는 +, -, * , / 만 입력 가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
*/
// 기본 변수 설정
let operator = "+"; // 연산자 변수
let n1 = 10; // 첫 번째 숫자
let n2 = 20; // 두 번째 숫자
let result = null; // 연산 결과
let str = "";

// if-else if 문을 사용한 사칙연산 구현
if (operator === "+") {
  str = "덧셈";
  result = n1 + n2;
} else if (operator === "-") {
  str = "뺄셈";
  result = n1 - n2;
} else if (operator === "*") {
  str = "곱셈";
  result = n1 * n2;
} else if (operator === "/") {
  str = "나눗셈";
  result = n1 / n2;
} else {
  console.log("잘못된 입력");
}

if (result !== null) {
  console.log(`${str} 결과: ${n1} ${operator} ${n2} = ${result}`);
}

// 1~7 사이의 숫자를 입력받아 해당 요일을 출력하는 프로그램
// 1은 월요일, 2는 화요일, ... 7은 일요일
// 1~7 사이의 숫자가 아니면 "잘못된 요일" 출력

let day = 7;
let result2 = "";

// if-else if 문으로 작성
// 출력 예시: 일요일
if (day === 1) {
  result2 = "월요일";
} else if (day === 2) {
  result2 = "화요일";
} else if (day === 3) {
  result2 = "수요일";
} else if (day === 4) {
  result2 = "목요일";
} else if (day === 5) {
  result2 = "금요일";
} else if (day === 6) {
  result2 = "토요일";
} else if (day === 7) {
  result2 = "일요일";
} else {
  console.log("잘못된 요일");
}

// 1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
// 봄: 3 ~ 5월, 여름: 6 ~ 8월, 가을: 9 ~ 11월, 겨울: 12 ~ 2월
// 1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 월" 출력

let month = 9;
let result3 = "";

// if-else if 문으로 작성
// 출력 예시: 가을
if (month === 3 && 4 && 5) {
  result3 = "봄";
} else if (month === 6 && 7 && 8) {
  result3 = "여름";
} else if (month === 9 && 10 && 11) {
  result3 = "가을";
} else if (month === 12 && 1 && 2) {
  result3 = "겨울";
} else {
  console.log("잘못된 월");
}

console.log(`오늘은 ${result2}, 지금은 ${result3}입니다.`);
