/*
전개 구문(Spread syntax)
*/

// 배열인 경우
// 전개 구문: React에서 많이 사용
const state = ["orange", "yellow", "green", "black"];

// 참조 복사
// 주소 그대로 복사되기 때문에 메모리 주소 값이 같다.
// 따라서 state === newState 연산을 한다면 true를 반환한다.
// const newState = state;

// 객체 복사(얕은 복사)
// 새로운 배열을 만든 것이기 때문에 메모리 주소 값이 다르다.
// 따라서 state === newState 연산을 한다면 false를 반환한다.
// const newState = [];
// for (let i = 0; i < state.length; i++) {
//   newState[i] = state[i];
// }

// const newState = [state[0], state[1], state[2], state[3]];

const newState = [...state, "white"];

console.log(state, newState);
console.log(state === newState);

// 객체인 경우
const state2 = { userName: "전개핑", age: 30 };

// 참조 복사
// const newState2 = state2;
// state2.age += 10;

// const newState2 = { userName: "전개핑", age: 30 };

// 객체 복사(얕은 복사)
const newState2 = { ...state2, job: "student" };
newState2.age += 10;

console.log(state2, newState2);
console.log(state2 === newState2);

// 함수의 인자값을 전개 구문으로 전달
function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  console.log(sum);
}

const numbers = [10, 20, 30];

// sum(numbers[0], numbers[1]);
sum(...numbers);
