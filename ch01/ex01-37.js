/*
Call by Value와 Call by Reference 차이
*/

/**
 * data1의 값을 10 증가시키고,
 * data2의 0번째 요소의 값을 10 증가시킨다.
 * data1, data2의 0번째 요소의 값을 출력한다.
 * @param {number} data1
 * @param {Array} data2
 */
// 내가 만든 코드
// function add10(data1, data2) {
//   console.log("함수 내부", data1 + 10, data2[0] + 10);
// }

// add10(80, [80]);

// 강사님 코드
function add10(data1, data2) {
  data1 += 10;
  data2[0] += 10;
  console.log("함수 내부", data1, data2[0]); // 90 90
  // return data1; 수정한 값을 전달하고 싶을 때
}

// 이 변수는 선언과 동시에 stack 메모리에 저장됨
let d1 = 80; // number - 원시 타입

// 참조형 데이터 타입들은 heap 메모리에 저장됨
let d2 = [80]; // array(object) - 참조 타입

console.log("함수 호출 이전", d1, d2[0]); // 80 80

add10(d1, d2);

// d1 = add10(d1, d2); // add10에서 수정한 값을 사용하고 싶을 때

console.log("함수 호출 이전", d1, d2[0]); // 80 90
