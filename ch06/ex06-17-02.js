// echo 함수 - 제네릭 함수
// ex06-17.ts 복사
(() => {
    // 타입 매개변수를 받고 타입을 리턴하는 함수의 타입 지정
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo(true));
    console.log(echo(new Date()));
})();
export {};
