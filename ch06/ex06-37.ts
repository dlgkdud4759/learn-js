// 맵드 타입 - 유틸리티 타입 구현 원리

(() => {
  interface Todo {
    id: string;
    title: string;
    content: string;
  }

  // keyof T = 'id' | 'title' | 'content'
  // T[Prop] -> Todo['id] -> sting
  type MyPartial<T> = {
    [Prop in keyof T]?: T[Prop];
  };

  // 읽기 전용으로 바뀐 타입 변환
  type MyReadonly<T> = {
    readonly [Prop in keyof T]: T[Prop];
  };

  const todo1: MyPartial<Todo> = {
    title: "제목1",
  };

  const todo2: Partial<Todo> = {
    title: "제목2",
  };

  const todo3: MyReadonly<Partial<Todo>> = {
    title: "제목3",
  };
  // todo3.title = "수정"; // MyReadonly로 인해 컴파일 에러

  const todo4: Pick<MyReadonly<Partial<Todo>>, "title"> = {
    title: "제목2",
  };

  console.log(todo1, todo2);
})();
