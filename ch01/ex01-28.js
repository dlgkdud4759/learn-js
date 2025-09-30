/*
유사 배열 객체
- length 속성을 가지고 있음
- 0부터 시작하는 인덱스와 동일한 속성을 포함
- 배열처럼 사용하지만 실체는 객체
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * 예시) [ 10, 20 ] 배열이 전달될 경우
 * 0 10
 * 1 20
 * @param {*} arr - 배열 전달
 */
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

printArr([10, 20]); // 함수 호출

// 진짜 배열
const colorArr = ["orange", "yellow", "green"];
colorArr.push("black");

printArr(colorArr);

// 유사 배열 객체
const colorObj = {
  length: 3,
  0: "orange",
  1: "yellow",
  2: "green",
  push: function (color) {
    colorObj[colorObj.length] = color;
    colorObj.length++;
  },
};

colorObj.push("black");
printArr(colorObj);

colorObj.push("white");
printArr(colorObj);
