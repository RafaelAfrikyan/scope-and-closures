// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

let arr = [2, 3, 4, 7, 7, 3];

let result = 0;

arr.forEach((el) => {
  if (el % 2 === 0) {
    result = result + Math.pow(el, 2);
  }
  return result;
});
console.log(result);
