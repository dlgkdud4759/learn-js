/*
new Object() - 생성자 함수로 객체 생성
*/

// 첫 번째 user
const userName = "이하영";
const age = "25";
const hobby = "게임";
console.log(userName, age, hobby);

// 두 번째 user
const userName2 = "이하영";
const age2 = "25";
const hobby2 = "게임";
console.log(userName2, age2, hobby2);

const user = new Object(); // object 생성자 함수로 객체 생성

// 점 표기법(객체에 속성 부여 1)
user.name = "이하영"; // user 객체에 name 속성을 추가
user.age = 25; // user 객체에 age 속성을 추가
user.hobby = "게임"; // user 객체에 hobby 속성을 추가

// 대괄호 표기법(객체에 속성 부여 2)
user["hobby"] = "게임"; // user 객체에 hobby 속성을 추가

console.log(user.name, user["age"], user.hobby);

const user2 = new Object(); // object 생성자 함수로 객체 생성

// 점 표기법(객체에 속성 부여 1)
user2.name = "이하영"; // user 객체에 name 속성을 추가
user2.age = 25; // user 객체에 age 속성을 추가
user2.hobby = "게임"; // user 객체에 hobby 속성을 추가

// 대괄호 표기법(객체에 속성 부여2)
user2["hobby"] = "게임"; // user 객체에 hobby 속성을 추가

console.log(user2.name, user2["age"], user2.hobby);
console.log(typeof user, user);
