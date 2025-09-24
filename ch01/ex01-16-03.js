/*
if 문을 이용하여 사용자의 로그인 상태와 사용자의 등급을 출력하세요.
*/

const isLogin = true; // 로그인 상태
const isUser = true; // 구매자
const isSeller = false; // 판매자
const isAdmin = false; // 관리자

// 로그인 상태 출력
// 로그인 상태/로그아웃 상태

if (isLogin) {
}

if (!isLogin) {
}

// 사용자 유형 출력
// 구매자/판매자/관리자

if (isUser) {
}

// 로그인 상태와 사용자 유형을 조합해서 출력
// 사용자 로그인 상태/사용자 로그아웃 상태
// 판매자 로그인 상태/판매자 로그아웃 상태
// 관리자 로그인 상태/관리자 로그아웃 상태
if (isLogin && isUser) console.log("구매자 로그인 상태");
if (isLogin && !isUser) console.log("구매자 로그아웃 상태");

if (isLogin && isSeller) console.log("판매자 로그인 상태");
if (isLogin && !isSeller) console.log("판매자 로그아웃 상태");

if (isLogin && isAdmin) console.log("관리자 로그인 상태");
if (isLogin && !isAdmin) console.log("관리자 로그아웃 상태");

/*
//관리자 로그인상태/관리자 로그아웃상태
if (isLogin === true && isAdmin === true) {
  console.log('관리자 로그인상태');
}
if (isLogin === false && isAdmin === true) {
  console.log('관리자 로그아웃상태');
}
*/
