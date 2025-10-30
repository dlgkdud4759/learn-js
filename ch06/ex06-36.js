// 맵드 타입 - 매핑 수정자
(() => {
    // readonly 속성과 옵셔널을 -를 활용해 지울 수 있음
    // type OptionalTodo = {
    //   -readonly [Prop in keyof Todo]-?: string;
    // };
    const todo1 = {
        id: "12",
    };
    console.log(todo1);
})();
export {};
