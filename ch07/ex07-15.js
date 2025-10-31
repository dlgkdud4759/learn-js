// 내장 객체 Array - indexOf(), lastIndexOf()
(() => {
    const arr = [1, 3, 5, 8, 9, 3, 4, 5];
    const arr1 = [1, 3, 5, 8, 9, 3, 4, 5];
    console.log("첫번째 3의 위치", arr.indexOf(3)); // 1
    console.log("마지막 3의 위치", arr.lastIndexOf(3)); // 5
    console.log("첫번째 2의 위치", arr.indexOf(2)); // -1
    console.log("마지막 2의 위치", arr.lastIndexOf(2)); // -1
    // 배열에서 8을 찾아서 제거
    arr.splice(arr.indexOf(8), 1);
    console.log(arr);
    // 원본은 수정하지 않고 8이 제거된 새로운 배열 생성
    const arr2 = [...arr1];
    arr2.splice(arr2.indexOf(8), 1);
    console.log(arr1, arr2);
})();
export {};
