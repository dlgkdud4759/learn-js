// 주요 내장 함수 - setInterval, clearInterval
// ex07-02.ts 복사
(() => {
    console.log("시작");
    let count = 0;
    const timerId = setInterval((n1, n2) => {
        count++;
        // 3번 실행 후 중지
        if (count === 3) {
            // Timer 작업 취소
            clearInterval(timerId);
        }
        console.log("3초 마다 실행", n1 + n2, new Date());
    }, 1000 * 3, 10, 20);
    console.log("종료");
})();
export {};
