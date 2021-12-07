//Write a function which remove elements with length <= 3

function filterArr(arr) {
  return arr.filter((el) => {
    if (el.length > 3) {
      return el;
    }
  });
}
console.log(filterArr(["kia", "tesla", "bmw", "mercedes"]));
