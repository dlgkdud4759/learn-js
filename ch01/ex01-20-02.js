/*
반복문 - while문
*/

// 1부터 10까지 홀수의 합계 출력
let i = 1;
let sum = 0;
let sum2 = 0;

while (i <= 10) {
  if (i % 2 !== 0) {
    sum += i;
  } else {
    sum2 += i;
  }
  i++;
}

console.log("1부터 10까지 홀수의 합계", sum);
console.log("1부터 10까지 짝의 합계", sum2);
