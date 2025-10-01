/*
2차원 배열
*/

// 2차원 배열 선언 및 초기화
// const numbers = [];
// numbers[0] = [1, 3, 5, 7, 9];
// numbers[1] = [2, 4, 6, 8, 10];
// numbers[2] = [3, 6, 9, 12, 15];
// numbers[3] = [4, 8, 12, 16, 20];
// numbers[4] = [5, 10, 15, 20, 25];

const numbers = [
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25],
];

console.log(numbers[0]); // [ 1, 3, 5, 7, 9 ]
console.log(numbers[1]); // [ 2, 4, 6, 8, 10 ]
console.log(numbers[2]); // [ 3, 6, 9, 12, 15 ]
console.log(numbers[3]); // [ 4, 8, 12, 16, 20 ]
console.log(numbers[4]); // [ 5, 10, 15, 20, 25 ]

console.log(numbers[0][3]); // 7
console.log(numbers[1][0]); // 2
console.log(numbers[2][3]); // 12
console.log(numbers[3][4]); // 20
console.log(numbers[4][2]); // 15

// for 문을 이용해서 2차원 배열의 모든 요소의 합계를 출력하세요.
// 결과:
let sum1 = 0;
let sum2 = 0;

// 2차원 배열의 모든 요소의 합계를 출력(for)
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    sum1 += numbers[i][j];
  }
}

// 2차원 배열의 모든 요소의 합계를 출력(for of)
for (let row of numbers) {
  for (let num of row) {
    sum2 += num;
  }
}

console.log("2차원 배열의 합계(for):", sum1);
console.log("2차원 배열의 합계(for of):", sum2);
