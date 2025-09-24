/*
동등 연산자와 일치 연산자 차이
*/

console.log(10 === "10"); // false
console.log(10 == "10"); // true -> 형변환: 숫자 타입 10 == 10 이기 때문에 true

console.log(null === undefined); // false
console.log(null == undefined); // true

console.log("1" === true); // false
console.log("1" == true); // true -> 형변환: 숫자 타입 1 == 1 이기 때문에 true
