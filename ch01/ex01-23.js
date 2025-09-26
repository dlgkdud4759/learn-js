/*
new Object() - 생성자 함수로 객체 생성
*/

const user = new Object(); // object 생성자 함수로 객체 생성

// 점 표기법
user.name = "이하영"; // user 객체에 name 속성을 추가
user.age = 25; // user 객체에 age 속성을 추가
user.hobby = "게임"; // user 객체에 hobby 속성을 추가

// 대괄호 표기법
user["hobby"] = "게임"; // user 객체에 hobby 속성을 추가

console.log(user.name, user["age"], user.hobby);
