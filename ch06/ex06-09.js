// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사
(() => {
    // 타입 별칭 생성
    // type User = {
    const haru = { name: "haru", age: 5 };
    const namu = { name: "namu", age: 8 };
    console.log(haru.age, namu.name.toUpperCase());
})();
export {};
