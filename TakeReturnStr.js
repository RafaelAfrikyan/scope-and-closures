// Write a function redundant that takes in a string str and returns a function that returns str.

function redundante(str) {
  return function f1() {
    return str;
  };
}
const f1 = redundante("vfdc");
console.log(f1());
