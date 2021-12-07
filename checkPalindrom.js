// Check whether string is palindrome, or not.

let word = "katkjlak";
let wordArr = word.split("");
let check = 0;

for (i = 0; i < wordArr.length; i++) {
  if (wordArr[i] === wordArr.reverse()[i]) {
    check = check + 1;
  }
}
if (check === word.length) {
  console.log("Yes");
} else {
  console.log("No");
}
