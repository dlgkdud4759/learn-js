// 선택적 파라미터(optional parameter)

(() => {
  // age에 ?을 붙이면서 age 값을 받지 않아도 console.log가 찍히게 됨
  function user(name: string, age?: number) {
    console.log(name, age);
  }

  user("하루", 5);
  user("나무");
})();
