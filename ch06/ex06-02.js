// 주요 타입
(() => {
    let str = "HaYeong";
    let age = 25;
    let done = true;
    // done = 'false'; // 컴파일 에러(boolean 타입에 문자열을 작성함)
    let nullVal = null; // null 값 밖에 가질 수 없다.
    let emptyVal;
    let todo = { title: "TypeScript 공부", done: false }; // 객체 타입
    let todoList1 = ["JavaScript 복습", "TypeScript 공부"]; // 배열(문자열)
    let todoList2 = ["JavaScript 복습", "TypeScript 공부"]; // 배열(문자열)
    // tuple: 길이가 고정되고 각 요소의 타입이 정의된 배열
    let haru = ["하루", 5];
    let namu = ["나무", 8];
    // tsc가 타입 체크를 하지 않음 - 절대 사용하지 말아라
    let userName1 = "오이영"; // 모든 타입을 의미하지만, TypeScript를 사용하지 않는다는 의미
    userName1 = 520;
    // console.log(userName1.toUpperCase());
    // unknown: 값을 저장할 때는 타입을 체크하지 않지만, 사용할 때는 타입을 체크
    // any와 마찬가지로 사용하지 말아라
    let userName2 = "이일구";
    userName2 = 219;
    // 타입 가드
    if (typeof userName2 === "string") {
        console.log(userName2.toUpperCase());
    }
})();
export {};
