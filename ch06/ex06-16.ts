// 인터페이스 선언 병합
// ex06-15.ts 복사

(() => {
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  interface Todo {
    // id: string; // 동일한 속성을 지정하려면 type이 같아야 함
    done: boolean;
  }

  const todo: Todo = {
    id: 1,
    title: "인터페이스 병합",
    content: "인터페이스 병합을 해봐요",
    done: true,
  };

  console.log(todo);

  interface User {
    name: string;
    email: string;
    // phone?: string;
    // address?: string;
    // job?: string;

    [key: string]: string; // 인덱스 시그니처(같은 타입일 경우 여러 속성들을 하나로 정의할 수 있음)
  }

  const haru: User = {
    name: "하루",
    email: "haru@gmail.com",
    phone: "01012312312",
  };

  const namu: User = {
    name: "나무",
    email: "namu@gmail.com",
    address: "경기도 김포시",
    job: "강아지",
    gender: "여자",
  };

  console.log(haru, namu);
})();
