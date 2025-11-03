// 에러 핸들링 - try...catch 문으로 에러 처리 1
// ex08-02.ts 복사

(() => {
  function f1() {
    console.log("f1 호출");

    try {
      const fn = new Function("retrun 10;"); // ReferenceError
      console.log("fn 실행", fn());
    } catch (err) {
      // 타입 가드
      if (err instanceof Error) {
        console.error("2-B.", err.message);
      }
    } finally {
      console.log("3. try...catch 문이 실행 완료된 후 실행");
    }

    console.log("4. f1 함수 정상 종료");
  }

  function f2() {
    f1();

    console.log("5. f2 함수 정상 종료");
  }

  f2();

  console.log("6. 프로그램 정상 종료");
})();
