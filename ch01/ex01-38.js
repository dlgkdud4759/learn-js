/*
전역 변수와 지역 변수
*/

var age = 20; // 전역 변수
year = 7; // 전역 변수 (window. 이 생략되었다고 인식하기 때문)
// window.year = 7;

function getAge(year) {
  // 지역 변수
  var age = 30; // 지역 변수
  myAge = age + year; // 전역 변수 (window. 이 생략되었다고 인식하기 때문)
  // window.myAge = age + year;
  console.log(myAge); // 전역 변수 (window. 이 생략되었다고 인식하기 때문)
  // window.console.log(myAge);
}

getAge(5);
console.log(age, year);

// 전역 변수와 지역 변수가 있다는 것은 알아야 하지만,
// 전역 변수는 거의 사용하지 않음
