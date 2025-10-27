// ========== 로컬 스토리지 ==========

const localKey = document.querySelector("#localKey");
const localValue = document.querySelector("#localValue");
const localResult = document.querySelector("#localResult");

// 로컬 스토리지에 저장
function saveToLocal() {
  if (localKey.value && localValue.value) {
    localStorage.setItem(localKey.value, localValue.value);
    localResult.innerHTML = `저장됨: ${localKey.value} = ${localValue.value}`;
    localKey.value = "";
    localValue.value = "";
  } else {
    localResult.innerHTML = `키와 값을 모두 입력하세요.`;
  }
}

// 로컬 스토리지에서 읽어오기
function loadFromLocal() {
  if (localKey.value) {
    const value = localStorage.getItem(localKey.value);
    if (value) {
      localResult.innerHTML = `키 ${localKey.value}의 값은 ${value}입니다.`;
    } else {
      localResult.innerHTML = `키 ${localKey.value}를 찾을 수 없습니다.`;
    }
  } else {
    localResult.innerHTML = `키를 입력하세요.`;
  }
}

// 로컬 스토리지의 삭제 기능 추가
function removeLocal() {
  if (localKey.value) {
    const value = localStorage.getItem(localKey.value);
    if (value) {
      localStorage.removeItem(localKey.value);
      localResult.innerHTML = `키 ${localKey.value}가 삭제됨`;
      localKey.value = "";
    } else {
      localResult.innerHTML = `키 ${localKey.value}가 존재하지 않습니다.`;
    }
  } else {
    localResult.innerHTML = `키를 입력하세요.`;
  }
}

// 로컬 스토리지의 모든 데이터 삭제
function clearLocal() {
  localStorage.clear();
  localResult.innerHTML = `localStorage의 데이터가 모두 삭제됨`;
}

// ========== 세션 스토리지 ==========

const sessionKey = document.querySelector("#sessionKey");
const sessionValue = document.querySelector("#sessionValue");
const sessionResult = document.querySelector("#sessionResult");

// 세션 스토리지에 저장
function saveToSession() {
  if (sessionKey.value && sessionValue.value) {
    sessionStorage.setItem(sessionKey.value, sessionValue.value);
    sessionResult.innerHTML = `저장됨: ${sessionKey.value} = ${sessionValue.value}`;
    sessionKey.value = "";
    sessionValue.value = "";
  } else {
    sessionResult.innerHTML = `키와 값을 모두 입력하세요.`;
  }
}

// 세션 스토리지에서 읽어오기
function loadFromSession() {
  if (sessionKey.value) {
    const value = sessionStorage.getItem(sessionKey.value);
    if (value) {
      sessionResult.innerHTML = `키 ${sessionKey.value}의 값은 ${value}입니다.`;
    } else {
      sessionResult.innerHTML = `키 ${sessionKey.value}를 찾을 수 없습니다.`;
    }
  } else {
    sessionResult.innerHTML = `키를 입력하세요.`;
  }
}

// 세션 스토리지의 삭제 기능 추가
function removeSession() {
  if (sessionKey.value) {
    const value = sessionStorage.getItem(sessionKey.value);
    if (value) {
      sessionResult.innerHTML = `키 ${sessionKey.value}가 삭제됨`;
      sessionStorage.removeItem(sessionKey.value);
      sessionKey.value = "";
    } else {
      sessionResult.innerHTML = `키 ${sessionKey.value}가 존재하지 않습니다.`;
    }
  } else {
    sessionResult.innerHTML = `키를 입력하세요.`;
  }
}

// 세션 스토리지의 모든 데이터 삭제
function clearSession() {
  sessionStorage.clear();
  sessionResult.innerHTML = `sessionStorage의 데이터가 모두 삭제됨`;
}

// 스토리지의 모든 데이터 조회
function showAllData() {
  const allDataEl = document.querySelector("#allData");
  let html = `<h3>localStorage</h3>`;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    html += `${key}: ${value}<br>`;
  }

  html += `<h3>sessionStorage</h3>`;
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    html += `${key}: ${value}<br>`;
  }

  allDataEl.innerHTML = html;
}
