/*
switch문

switch(변수){
  case 값1:
    실행할 코드
    break;
  case 값2:
    실행할 코드
    break;
  default:
    실행할 코드
}
*/

// 사용자가 입력한 연산자와 숫자를 받아 연산을 수행하는 프로그램
// 0으로 나눌 경우 "0으로 나눌 수 없습니다." 출력
// 잘못된 연산자를 입력할 경우 "잘못된 연산자입니다." 출력

// 기본 변수 설정
let operator = "+"; // 연산자 변수
let n1 = 10; // 첫 번째 숫자
let n2 = 20; // 두 번째 숫자
let result = null; // 연산 결과
let str = "";

// if-else if 문으로 작성
// if (operator === "+") {
//   str = "덧셈";
//   result = n1 + n2;
// } else if (operator === "-") {
//   str = "뺄셈";
//   result = n1 - n2;
// } else if (operator === "*") {
//   str = "곱셈";
//   result = n1 * n2;
// } else if (operator === "/") {
//   str = "나눗셈";
//   result = n1 / n2;
// } else {
//   console.log("잘못된 입력");
// }

// if (result !== null) {
//   console.log(`${str} 결과: ${n1} ${operator} ${n2} = ${result}`);
// }

// switch문으로 작성
switch (operator) {
  case "+":
    result = n1 + n2;
    break;
  case "-":
    result = n1 - n2;
    break;
  case "*":
    result = n1 * n2;
    break;
  case "/":
    result = n1 / n2;
    break;
  default:
    console.log("잘못된 연산자");
}

if (result !== null) {
  console.log(`${n1} ${operator} ${n2} = ${result}`);
}

// 1~7 사이의 숫자를 입력받아 해당 요일을 출력하는 프로그램
// 1은 월요일, 2는 화요일, ... 7은 일요일
// 1~7 사이의 숫자가 아니면 "잘못된 입력" 출력

let day = 3;
let dayName = "";

// if문으로 작성
// if (day === 1) {
//   dayName = "월요일";
// } else if (day === 2) {
//   dayName = "화요일";
// } else if (day === 3) {
//   dayName = "수요일";
// } else if (day === 4) {
//   dayName = "목요일";
// } else if (day === 5) {
//   dayName = "금요일";
// } else if (day === 6) {
//   dayName = "토요일";
// } else if (day === 7) {
//   dayName = "일요일";
// } else {
//   console.log("잘못된 요일");
// }

// switch문으로 작성
switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;
  default:
    console.log("잘못된 요일");
}

// 1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
// 봄: 3 ~ 5월, 여름: 6 ~ 8월, 가을: 9 ~ 11월, 겨울: 12 ~ 2월
// 1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 월" 출력

let month = 9;
let result3 = "";

// if-else if 문으로 작성
// 출력 예시: 가을
// if (month === 3 && 4 && 5) {
//   result3 = "봄";
// } else if (month === 6 && 7 && 8) {
//   result3 = "여름";
// } else if (month === 9 && 10 && 11) {
//   result3 = "가을";
// } else if (month === 12 && 1 && 2) {
//   result3 = "겨울";
// } else {
//   console.log("잘못된 월");
// }

// switch문으로 작성
switch (month) {
  case 3:
  case 4:
  case 5:
    console.log("봄");
    break;
  case 6:
  case 7:
  case 8:
    console.log("여름");
    break;
  case 9:
  case 10:
  case 11:
    console.log("가을");
    break;
  case 12:
  case 1:
  case 2:
    console.log("겨울");
    break;
  default:
    console.log("잘못된 월");
}
