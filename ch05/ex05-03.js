// 화면을 다 구성하고(이미지, js, css 파일 등)
window.addEventListener("load", function () {
  console.log("load 이벤트 발생");
});

// DOM 객체 구성이 완료된 후 발생하는 이벤트
window.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded 이벤트 발생");

  // 첫 번째 버튼 찾기
  const btn1 = document.querySelector("div > button");

  // 두 번째 버튼 찾기
  // const btn2 = document.querySelector("div > :nth-child(2)");
  // const btn2 = document.querySelector("div").children[1];
  // const btn2 = document.querySelectorAll("button")[1];
  const btn2 = btn1.nextElementSibling;

  //세 번째 버튼 찾기
  const btn3 = btn2.nextElementSibling;

  // 첫 버튼에 클릭 이벤트 추가
  btn1.addEventListener("click", function () {
    const movies = document.querySelector("#movies");
    const secondLi = movies.children[1];
    console.log(secondLi?.textContent); // 옵셔널 체이닝
  });

  // 두 번째 버튼에 클릭 이벤트 추가
  btn2.addEventListener("click", addMilk);

  function addMilk() {
    const newLi = document.createElement("li");
    const newTxt = document.createTextNode("우유");
    newLi.appendChild(newTxt);

    const buyList = document.querySelector("#buy-list");
    // buyList.appendChild(newLi); // 맨 뒤에 우유 추가
    buyList.insertBefore(newLi, buyList.firstChild); // 맨 앞에 우유 추가
  }

  // 선언문 방식은 중복 선언이 가능하며, 가장 마지막 선언문이 적용된다.
  // 코드는 짧지만 효율적인 코드는 아님
  function addMilk() {
    const buyList = document.querySelector("#buy-list");
    buyList.innerHTML += "<li>우유</li>";
  }

  // 세 번째 버튼에 클릭 이벤트 추가
  btn3.addEventListener("click", () => {
    const targetList = document.querySelectorAll(".list");
    for (let i = 0; i < targetList.length; i++) {
      const target = targetList[i]; // <ul>
      const firstLi = target.firstElementChild; // <li>
      firstLi?.remove(); // 옵셔널 체이닝
    }
  });
});
