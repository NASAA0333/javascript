// ---*
// --*-*
// -*-*-*
// *-*-*-*
// const n = 5;
// let result = "";
// for (a = 0; a < n; a++) {
//   result = result + "* ";
//   console.log(result);
// }

// let result = " ";
// for (let i = 0; i < n; i++) {
//   for (let q = 0; q < n - i - 1; q++) {
//     result = result + " ";
//   }
//   for (let w = 0; w < i; w++) {
//     result = result + "* ";
//   }
//   console.log(result);
//   result = " ";
// }
const n = 5;
for (let i = 0; i <= n; i++) {
  let row = " ".repeat(n - i) + "* ".repeat(i);
  console.log(row);
}
