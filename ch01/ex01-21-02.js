/*
반복문 - for문
*/
let lines = 5;

/*
 *
 **
 ***
 ****
 *****
 */
for (let i = 0; i < lines; i++) {
  let star = "";
  for (let k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}

/*
 ******
 ****
 ***
 **
 *
 */
for (let i = 0; i < lines; i++) {
  let star = "";
  for (let k = 0; k < lines - i; k++) {
    star += "*";
  }
  console.log(star);
}

// 과제 별찍기 - 1
for (let i = 0; i < lines; i++) {
  let star = "";
  for (let j = 1; j < lines - i; j++) {
    star += " ";
  }
  for (let k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}

// 과제 별찍기 - 2
for (let i = 0; i < lines; i++) {
  let star = "";
  for (let k = 1; k <= i; k++) {
    star += " ";
  }
  for (let j = 1; j <= lines - i; j++) {
    star += "*";
  }
  console.log(star);
}

// 과제 별찍기 - 3
for (let i = 1; i <= lines; i++) {
  let space = "";
  let star = "";
  for (let k = 0; k < lines - i; k++) {
    space += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    star += "*";
  }
  console.log(space + star);
}
