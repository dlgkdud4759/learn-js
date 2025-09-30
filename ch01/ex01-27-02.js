/*
배열 요소의 합계, 홀수의 합계, 짝수의 합계를 출력
*/

const arr = [4, 5, 7, 2, 9, 8];
let sum1 = 0; // 전체 합계
let sum2 = 0; // 전체 합계
let sum3 = 0; // 전체 합계
let oddSum = 0; // 홀수 합계
let evenSum = 0; // 짝수 합계
let oddSum2 = 0; // 홀수 합계
let evenSum2 = 0; // 짝수 합계

// 내가 작성한 코드

// 모든 요소의 합계 출력
console.log("===== 모든 요소의 합계(for) =====");
for (var i = 0; i < arr.length; i++) {
  sum1 += arr[i];
}

console.log("모든 요소의 합계:", sum1);

console.log("\n===== 모든 요소의 합계(for of) =====");
for (var elem of arr) {
  sum2 += elem;
}

console.log("모든 요소의 합계:", sum2);

console.log("\n===== 모든 요소의 합계(for in) =====");
for (var prop in arr) {
  sum3 += arr[prop];
}

console.log("모든 요소의 합계:", sum3);

// 홀수의 합계 출력
// 짝수의 합계 출력
console.log("\n===== 짝·홀수 요소의 합계(for) =====");
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddSum += arr[i];
  } else {
    evenSum += arr[i];
  }
}

console.log("홀수 요소의 합계:", oddSum);
console.log("짝수 요소의 합계:", evenSum);

// 홀수의 합계 출력(for of)
console.log("\n===== 홀수 요소의 합계(for of) =====");
for (var elem of arr) {
  if (elem % 2 !== 0) {
    oddSum2 += elem;
  }
}

console.log("홀수 요소의 합계:", oddSum2);

// 짝수의 합계 출력(for in)
console.log("\n===== 짝수 요소의 합계(for in) =====");
for (var prop in arr) {
  if (arr[prop] % 2 === 0) {
    evenSum2 += arr[prop];
  }
}

console.log("짝수 요소의 합계:", evenSum2);
