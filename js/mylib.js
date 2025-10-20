const mylib = {};

// 함수를 partial application으로 만들어주는 partial 메서드 추가
// [100]
Function.prototype.partial = function (...preArgs) {
  const fn = this; // sum
  // sum100 - [20]
  return function (...nextArgs) {
    const args = [...preArgs, ...nextArgs]; // [100, 20]
    return fn(...args); // sum(100, 20)
  };
};

// Child가 Parent를 상속받는다.
mylib.inherite = function (Parent, Child) {
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  // Object.create: 지정한 prototype 객체를 참조하는 객체 생성
  Child.prototype = Object.create(Parent.prototype);
};

// 모든 함수에 메모이제이션 기능 추가
Function.prototype.memo = function (key) {
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    return (this._cache[key] = this(key));
  }
};
