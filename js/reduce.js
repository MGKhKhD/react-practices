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

// const arr = ["Alice", "Vev", "Bob", "Alice", "Ross", "Ross"];
// console.log(
//   arr.reduce((acc, curr) => {
//     if (curr in acc) {
//       acc[curr]++;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, {})
// );

// const arr=[{name:'Tom', age:12},{name: "Hos", age: 25}, {name: 'Rihanna', age: 12}];
// const groupBy = (arr, prop)=> {
//   return arr.reduce((acc,curr)=> {
//     var key= curr[prop];
//     if(!acc[key]){
//       acc[key]=[];
//     }
//     acc[key].push(curr)
//     return acc;
//   },{})
// }

// var list =groupBy(arr,'age');
// console.log(list)

// var friends = [{
//   name: 'Anna',
//   books: ['Bible', 'Harry Potter'],
//   age: 21
// }, {
//   name: 'Bob',
//   books: ['War and peace', 'Romeo and Juliet'],
//   age: 26
// }, {
//   name: 'Alice',
//   books: ['The Lord of the Rings', 'The Shining'],
//   age: 18
// }];

// var arr = friends.reduce((acc,curr)=>[...acc, ...curr.books],['new book'])
// console.log(arr)

// var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// console.log(Array.from(new Set(myArray)))

// console.log(myArray.reduce((acc,curr)=>{
//   if(acc.indexOf(curr)=== -1){
//     acc.push(curr);
//   }
//   return acc;
// },[]))

const double = x => x + x;
const triple = x => x * 3;
const quadrople = x => x * 4;

const pipe = (...funcs) => inintVal =>
  funcs.reduce((acc, fn) => fn(acc), inintVal);
const mul = pipe(
  double,
  triple,
  quadrople
);
console.log(mul(2));
