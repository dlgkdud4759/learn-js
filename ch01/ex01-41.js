/*
구조 분해 할당(Destructuring assignment)
*/

const foo = ["yellow", "green", "blue"];

// const one = foo[0];
// const two = foo[1];
// const three = foo[2];

// 구조분해할당
const [one, two, three] = foo;

// const [user, setUser] = useState(); // 배열을 반환 (React 방식)

console.log(one, two, three); // 'yellow', 'green', 'blue'

const user = { userName: "구분할핑", userAge: 30 };
// const userName = user.userName;
// const userAge = user.userAge;

// 구조분해할당(객체)
const { userName, userAge } = user;

console.log(userName, userAge); // 구분할핑 30
