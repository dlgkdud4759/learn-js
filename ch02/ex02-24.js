/*
* 즉시실행 함수
- 함수를 정의하는 동시에 즉시 실행하는 패턴

*/

// 의도치 않게 전역 변수 alert을 재정의함
// var alert = "alert 변수명은 포기 못해!!!";
// console.log(alert);

// 일반 함수
// fn1 전역변수가 생김
var fn1 = function () {
  var alert = "alert 변수명은 포기 못해!!!";
  console.log(alert);
};

fn1();

// 즉시 실행 함수
(function () {
  var alert = "alert 변수명은 포기 못해!!!";
  console.log("IIFE", alert);
})();
