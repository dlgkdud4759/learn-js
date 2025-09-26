/*
반복문 - while문
*/

let day = 0; // 일한 날짜
let dailyCount = 1; // 매일 받는 쌀알 수(첫날 1톨부터 시작)
let sum = 0; // 누적도니 쌀알 수

while (sum <= 10000000) {
  day++; // 날짜 증가
  sum += dailyCount; // 오늘 받은 쌀알 누적
  dailyCount *= 2;
}

console.log(
  `${day}일 동안 일했더니 쌀알이 ${sum}톨이 되었다. 내일은 ${dailyCount}톨을 받겠군`
);

day = 0;
dailyCount = 1;
sum = 0;

while (day <= 30) {
  day++;
  sum += dailyCount;
  count *= 2;
}
console.log(
  `${day}일 동안 일했더니 쌀알이 ${sum}톨이 되었다. 내일은 ${dailyCount}톨을 받겠군`
);
