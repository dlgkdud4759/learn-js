import type { Cat } from "./types.js";

// 이미지 목록을 받아서 화면에 추가
export function appendImages(images: Cat[]) {
  const liList = images.map((item) => {
    const li = document.createElement("li"); // <li>
    const img = document.createElement("img"); // <img>
    img.src = item.url; // <img src="https://????.???">
    img.height = 200; // <img src="https://????.???" height="200">
    img.alt = "고양이"; // <img src="https://????.???" height="200" alt="고양이">
    li.appendChild(img); // <li><img src="https://????.???" height="200" alt="고양이"></li>
    return li;
  });

  const catList = document.querySelector("#cat-list");

  // 맨 앞에 추가
  catList?.prepend(...liList); //<ul><li><img src="https://????.???" height="200" alt="고양이"></li>...</ul>

  // 맨 끝에 추가
  // catList?.append(...liList); //<ul><li><img src="https://????.???" height="200" alt="고양이"></li>...</ul>
}
