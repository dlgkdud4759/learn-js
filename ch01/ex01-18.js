/*
if-else if문
*/

// 나이에 따른 성인/미성년자 구분

const num = 1;

if (num > 0) {
  console.log("양수");
} else if (num < 0) {
  console.log("음수");
} else {
  console.log("영");
}

const num2 = 15;

// num2가 2의 배수이면 '2의 배수' 출력하고,
// 3의 배수이면 '3의 배수' 출력하고, 그렇지 않으면 '2와 3의 배수가 아님' 출력

if (num2 % 2 === 0) {
  console.log("2의 배수");
} else if (num2 % 3 === 0) {
  console.log("3의 배수");
} else {
  console.log("2와 3의 배수가 아님");
}
