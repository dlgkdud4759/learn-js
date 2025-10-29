// 인터페이스 상속

(() => {
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    readonly id: number;
    done?: boolean;
  }

  // 할일 등록에 사용
  const todo1: TodoRegist = {
    title: "할일1",
    content: "내용1",
  };

  // 할일 상세 조회에 사용
  const todo2: TodoInfo = {
    id: 5,
    title: "할일2",
    content: "내용2",
    done: true,
  };

  console.log(todo1);
  console.log(todo2);
})();
