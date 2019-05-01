// summing up arrays
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((acc, curr) => acc + curr, 0));

// const arr = [{ x: 10 }, { x: 25 }, { x: -5 }];
// console.log(
//   "max: ",
//   arr.map(el => el.x).reduce((acc, curr) => Math.max(acc, curr), -Infinity)
// );
// console.log(
//   "min",
//   arr.map(el => el.x).reduce((acc, curr) => Math.min(acc, curr), Infinity)
// );
// console.log("sum:", arr.map(el => el.x).reduce((acc, curr) => acc + curr, 0));
// console.log(
//   "multiply:",
//   arr.map(el => el.x).reduce((acc, curr) => acc * curr, 1)
// );

// const arr = [[1, 2], [3, 4], [5, 6]];
// console.log(arr.reduce((acc, curr) => acc.concat(curr), []));

const arr = ["Alice", "Vev", "Bob", "Alice", "Ross", "Ross"];
console.log(
  arr.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
  }, {})
);
