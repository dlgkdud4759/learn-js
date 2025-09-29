/*
JSON 표기법 - 국어, 영어, 수학 점수의 총점과 평균을 출력
*/

let score = {
  userName: "객체핑",
  kor: 100,
  eng: 90,
  math: 85,
};

score.sum = score.kor + score.eng + score.math;
// score.avg = score.sum / 3;
// Math.round(81.66666): 소수 첫째 자리에서 반올림 -> 82
// Math.round(81.66666 * 10 ** 2) / 10**2 => Math.round(8166.666) => 8167 / 10 ** 2 => 81.67
// score.avg = Math.round((score.sum / 3) * 10 ** 2) / 10 ** 2; // 소수 셋째 자리에서 반올림 처리
score.avg = Number((score.sum / 3).toFixed(2)); // 소수 셋째 자리에서 반올림 처리

console.log(score.userName, "의 총점:", score.sum);
console.log(score.userName, "의 평균:", score.avg);

score.eng += 10;
score.sum = score.kor + score.eng + score.math;
// score.avg = score.sum / 3;
// score.avg = Math.round((score.sum / 3) * 10 ** 2) / 10 ** 2; // 소수 셋째 자리에서 반올림 처리
score.avg = Number((score.sum / 3).toFixed(2)); // 소수 셋째 자리에서 반올림 처리

console.log(score.userName, "의 총점:", score.sum);
console.log(score.userName, "의 평균:", score.avg);

score.math += 10;
score.sum = score.kor + score.eng + score.math;
// score.avg = score.sum / 3;
// score.avg = Math.round((score.sum / 3) * 10 ** 2) / 10 ** 2; // 소수 셋째 자리에서 반올림 처리
score.avg = Number((score.sum / 3).toFixed(2)); // 소수 셋째 자리에서 반올림 처리

console.log(score.userName, "의 총점:", score.sum);
console.log(score.userName, "의 평균:", score.avg);
