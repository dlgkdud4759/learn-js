/*
반복문 - break, continue
*/

const n = 1;
const m = 10;
let result = null;

// n ~ m 까지의 정수 중에서 가장 작은 짝수를 찾아서 출력하세요.
// for (let i = m; i >= n; i--) {
//   if (i % 2 === 0) {
//     result = i;
//   }
// }

for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    result = i;
    break;
  }
}
console.log(`${n} ~ ${m} 정수 중 가장 작은 짝수: `, result);

// n ~ m 까지의 정수 중에서 홀수만 찾아서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
  }
  console.log("홀수: ", i);
}

// n ~ m 까지의 정수 중에서 홀수와 짝수를 찾아서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 !== 0) {
    console.log("홀수: ", i);
    continue;
  }
  console.log("짝수:", i);
}
