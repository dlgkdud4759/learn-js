// 고급 타입 연산자 - typeof

(() => {
  const haru = {
    name: "하루",
    age: 5,
    city: "김포시",
  };

  // 오타를 방지할 수 있음
  type HaruType = typeof haru;

  const namu: HaruType = {
    name: "나무",
    age: 8,
    city: "김포시",
  };

  console.log(haru, namu);
})();
