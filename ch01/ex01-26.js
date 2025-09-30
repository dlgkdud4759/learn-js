/*
배열 생성, 읽기, 쓰기
*/

// 배열 생성 방법 1: Array 생성자 사용
// const arr = new Array(100, 200, 300);

// 배열 생성 방법 2: JSON 표기법 - 이 방법을 더 많이 사용한다.
const arr = [100, 200, 300];

// 배열에 요소 추가
// index 사용
arr[3] = 400;
arr[4] = 600;

// push 메서드 사용: 배열의 마지막에 지정한 요소를 추가
arr.push(500);
arr.push(700);
arr.push(800);

// index를 이용해서 배열의 마지막 위치에 요소를 추가
// arr[-1] = 900;
arr[arr.length] = 900;
arr[arr.length] = 1000;
arr[arr.length] = 1100;

// 첫 번째 위치에 요소를 추가
arr.unshift(50); // 맨 앞에 추가
arr.unshift(30);

console.log("첫 번째 요소", arr.shift()); // 앞에서 제거해서 꺼냄
console.log("마지막 요소", arr.pop()); // 뒤에서 제거해서 꺼냄

// 기존 요소의 값을 변경
arr[5] = 5000;
arr[6] = 6000;

// 배열의 중간에 빈 공간을 두고 요소 추가
arr[15] = 1500;

// 배열의 모든 요소를 순차적으로 출력
console.log("===== 배열의 모든 요소를 순차적으로 출력 =====");
for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
for (var elem of arr) {
  console.log(elem);
}

// 배열의 모든 요소를 역순으로 출력
console.log("===== 배열의 모든 요소를 역순으로 출력 =====");
for (var i = arr.length - 1; i >= 0; i--) {
  console.log(i, arr[i]);
}

console.log("===== for of 문 배열의 모든 요소를 역순으로 출력 =====");
for (var elem of arr.reverse()) {
  console.log(elem);
}

console.log(arr.length, typeof arr, arr);
