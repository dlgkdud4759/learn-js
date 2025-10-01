/*
반환값이 있는 함수 - 토스터
*/

/**
 *
 * @param {number} time - 토스트 굽는 시간(초)
 * @param {string} bread - 빵의 종류
 * @returns {string} - 구워진 토스트에 대한 설명 문자
 * @example
 * toaster(40, "우유 식빵") // return '40초 동안 구워진 우유 식빵'
 */
function toaster(time, bread) {
  return time + "초 동안 구워진 " + bread;
}

const toast1 = toaster(40, "우유 식빵");
const toast2 = toaster(60);
const toast3 = toaster(30, "우유 식빵", 40, "호밀빵");

console.log(toast1);
console.log(toast2);
console.log(toast3);
