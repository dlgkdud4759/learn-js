/*
반복문 - while문
*/

// 0부터 10까지 출력
let i = 0;

while (i <= 10) {
  console.log(i++);
}

// 1부터 10까지의 모든 수의 합계를 출력
let sum = 0;
let j = 0;
console.log("j\tsum");

while (j <= 10) {
  sum += j;
  console.log(`${i}\t${sum}`);
  j++;
}

console.log("합계", sum);
