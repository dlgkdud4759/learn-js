/*
 * 배열 다루기 - for문 사용
 */

const todoList = [
  {
    id: 1,
    title: "JavaScript 공부",
    done: true,
  },
  {
    id: 4,
    title: "React 공부",
    done: false,
  },
  {
    id: 3,
    title: "바닐라 프로젝트",
    done: false,
  },
  {
    id: 2,
    title: "TypeScript 공부",
    done: false,
  },
  {
    id: 5,
    title: "Final 프로젝트",
    done: true,
  },
];

// 완료된 할일 목록
let doneList = [];

for (let i = 0; i < todoList.length; i++) {
  const todoItem = todoList[i];

  // 완료된 할일
  if (todoItem.done === true) {
    doneList.push(todoItem);
  }
}
console.log("완료된 할일 목록", doneList);

// 남은 할일 목록
let remainList = [];

for (let todoItem of todoList) {
  // 남은 할일
  if (todoItem.done === false) {
    remainList.push(todoItem);
  }
}

console.log("남은 할일 목록", remainList);

// 남은 할일 수
let remainCount = 0;

console.log("남은 할일 수", (remainCount += remainList.length));

// id=2인 할일
let todo = null;

for (let i = 0; i < todoList.length; i++) {
  const todoItem = todoList[i];

  // id가 2인 할일
  if (todoItem.id === 2) {
    todo = todoItem.title;
    break;
  }
}

console.log("id=2인 할일:", todo);

// id=3인 할일의 index
let todoIndex = -1;

for (let i = 0; i < todoList.length; i++) {
  const todoItem = todoList[i];

  // id가 3인 할일
  if (todoItem.id === 3) {
    todoIndex = i;
    break;
  }
}

console.log("id=3인 할일의 index", todoIndex);

// 남은 할일이 하나라도 있는가?
let hasTodo = false;

// 할일이 남아 있다면 false
// 할일이 남아 있지 않다면 true
if (remainCount === 0) {
  hasTodo = false;
} else {
  hasTodo = true;
}

console.log("남은 할일이 하나라도 있는가?", hasTodo);

// 할일이 모두 완료 되었는가?
let isAllDone = true;

// 할일이 모두 완료 되었다면 true
// 할일이 모두 완료되지 않았다면 false
if (remainCount === 0) {
  isAllDone;
} else {
  isAllDone = false;
}

console.log("할일이 모두 완료 되었는가?", isAllDone);
