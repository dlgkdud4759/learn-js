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
