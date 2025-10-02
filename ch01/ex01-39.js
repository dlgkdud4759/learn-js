/*
변수 선언문 var, let, const (var는 사용하지 말아라)
*/

/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1
 * @param {number} n2
 * @returns {number} - 최대값
 */
function max(n1, n2) {
  // var result = 0;
  //   const result = 0; // 선언과 동시에 반드시 초기화가 필요하다.
  let result;
  if (n1 > n2) {
    // result에 n1 지정
    // var result = n1; var를 사용하면 if문(블록) 밖에서도 사용이 가능하다. 이 방식은 사용하지 않는 것이 좋다.
    result = n1;
  } else {
    // result에 n2 지정
    // var result = n1; var를 사용하면 if문(블록) 밖에서도 사용이 가능하다. 이 방식은 사용하지 않는 것이 좋다.
    result = n2;
  }

  return result;
}

console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200
