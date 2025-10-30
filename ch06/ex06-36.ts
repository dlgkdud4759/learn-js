// 맵드 타입 - 매핑 수정자

(() => {
  interface Todo {
    id: string;
    title: string;
  }

  // 모든 속성을 옵셔널로 만들기
  // type OptionalTodo = {
  //   id?: string;
  //   title?: string;
  // };

  // keyof Todo = 'id' | 'title'
  type OptionalTodo = {
    [Prop in keyof Todo]?: string;
  };

  // readonly 속성과 옵셔널을 -를 활용해 지울 수 있음
  // type OptionalTodo = {
  //   -readonly [Prop in keyof Todo]-?: string;
  // };

  const todo1: OptionalTodo = {
    id: "12",
  };

  console.log(todo1);
})();
