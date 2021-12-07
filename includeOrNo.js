// Given an array. Determine whether it consists only from uniques or not.

let arr = [1, 3, 2, 1, 5, 30];

function choseEl(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(choseEl(arr));
