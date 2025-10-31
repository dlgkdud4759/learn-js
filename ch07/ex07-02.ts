// 주요 내장 함수 - setTimeout, clearTimeout

(() => {
  console.log("시작");

  const timerId = setTimeout(
    (n1: number, n2: number) => {
      console.log("3초 후에 실행", n1 + n2);
    },
    1000 * 3,
    10,
    20
  );

  // Timer 작업 취소
  clearTimeout(timerId);

  console.log("종료");
})();
