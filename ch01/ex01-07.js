/*
기본 데이터 타입 - BigInt
*/

// number 타입으로 표현 가능한 최대값(약 1.8e+308)
var maxNum = Number.MAX_VALUE; //

// 정확하게 표현 가능한 최대 정수값(약 9000조)
var maxSafeNum = Number.MAX_SAFE_INTEGER;

console.log(maxNum, maxSafeNum);

// 9007199254740990 9007199254740991 9007199254740992 9007199254740992 9007199254740994
// 9007199254740991 보다 높은 값을 다뤄야 한다면 BigInt()를 활용해야 한다.
console.log(
  maxSafeNum - 1,
  maxSafeNum,
  maxSafeNum + 1,
  maxSafeNum + 2,
  maxSafeNum + 3
);

// bigit 타입
// 숫자 뒤에 'n'을 붙임
var b1 = 12345n;

//BigInt() 함수에 숫자를 전달
var b2 = BigInt(maxSafeNum);

// 9007199254740990n 9007199254740991n 9007199254740992n 9007199254740993n 9007199254740994n
// BigInt()를 활용하여 계산에 오차가 생기지 않음
console.log(b2 - 1n, b2, b2 + 1n, b2 + 2n, b2 + 3n); // BitInt() 연산을 위해서는 연산 값도 BitInt여야 한다.
