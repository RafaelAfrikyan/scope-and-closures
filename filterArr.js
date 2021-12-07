//Write a function that implements filtering in array

const value = [null, true, {}, { name: "Elon" }, "", NaN, 0];

function filterFalsyVallues(values) {
  return values.filter((el) => {
    return (
      el !== undefined && el !== null && el !== false && el !== 0 && el !== ""
    );
  });
}
console.log(filterFalsyVallues(value));
