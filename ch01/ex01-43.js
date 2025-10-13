/*
나머지 매개변수(Rest parameters)
*/

// 모든 매개변수의 합계를 출력
// 인자값이 모자랄 경우 0으로 처리
// 인자값이 3개 이상일 경우에도 합계에 반영
function sum(n1 = 0, n2 = 0, ...args) {
  let result = 0;
  result = n1 + n2;

  for (let arg of args) {
    result += arg;
  }
  console.log(result);
}

sum();
sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4, 421, 124, 123, 1256, 4536, 45745, 7689, 6789, 235, 4567, 2345);
