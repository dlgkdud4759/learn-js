/*
* 커링 - 배열에서 조건에 맞는 요소 찾기

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result;

// const greaterThan = _.curry((min, x) => x > min);
const greaterThan = (min) => (x) => x > min;

// result = numbers.filter((num) => greaterThan(3, num));
result = numbers.filter(greaterThan(3));
console.log("3보다 큰 요소", result);

result = numbers.filter(greaterThan(5));
console.log("5보다 큰 요소", result);

result = numbers.filter(greaterThan(6));
console.log("6보다 큰 요소", result);

result = numbers.filter(greaterThan(8));
console.log("8보다 큰 요소", result);

// // 3보다 큰 요소만 추출
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 3) {
//     result.push(numbers[i]);
//   }
// }
// console.log(result);

// result = [];
// // 5보다 큰 요소만 추출
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 5) {
//     result.push(numbers[i]);
//   }
// }
// console.log(result);

// result = [];
// // 6보다 큰 요소만 추출
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 6) {
//     result.push(numbers[i]);
//   }
// }
// console.log(result);

// result = [];
// // 8보다 큰 요소만 추출
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 8) {
//     result.push(numbers[i]);
//   }
// }
// console.log(result);
