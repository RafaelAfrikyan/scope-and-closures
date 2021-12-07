// Create a function that implements partial sum

function sum(a) {
  return function (b) {
    return a + b;
  };
}
const counter1 = sum(10);
console.log(counter1(10));
