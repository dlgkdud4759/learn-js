/*
매개변수를 가진 함수 - 도어락
*/

/**
 * 올바른 비밀번호가 입력되면 문이 열리고(띠리링),
 * 잘못된 비밀번호가 입력되면 경보음(삐! 삐! 삐! 삐!)이 울린다.
 *
 * 예시)
 * - doorLock('11111') -> 삐! 삐! 삐! 삐!
 * - doorLock('1357') -> 띠리링
 * - doorLock() -> 삐! 삐! 삐! 삐!
 * @param {*} password - 비밀번호
 */
function doorLock(password) {
  // 실제 비밀번호
  const pwd = "1357";

  // 만약 입력한 비밀번호가 등록된 비밀번호보다 자리가 많을 경우 뒷자리를 등록된 비밀번호 길이만큼 추출
  if (password?.length > pwd.length) {
    let subPassword = "";
    const start = password.length - pwd.length;
    for (let i = start; i < password.length; i++) {
      subPassword += password[i];
    }
    password = subPassword;
  }

  // password와 pwd가 일치한다면 띠리링 출력
  if (password === pwd) {
    console.log("띠리링");
    // password와 pwd가 일치하지 않는다면 띠리링 출력
  } else {
    console.log("삐! 삐! 삐! 삐!");
  }
}

// 테스트 케이스
doorLock("11111"); // 삐! 삐! 삐! 삐!
doorLock("1357"); // 띠리링
doorLock(); // 삐! 삐! 삐! 삐!
doorLock("23412431357"); // 띠리링
doorLock("234124312312314312412421331357"); // 띠리링

// 만약 입력한 비밀번호가 등록된 비밀번호보다 자리가 많을 경우 뒷자리를 등록된 비밀번호 길이만큼 추출
// 내가 만든 코드
// if (password?.length > pwd.length) {
//   let newPwd = password.slice(-4);
//   if (newPwd === pwd) {
//     console.log("띠리링");
//   } else {
//     console.log("삐! 삐! 삐! 삐!");
//   }
// }
