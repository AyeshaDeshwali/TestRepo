// export function hello(a, b) {
//   return a + b;
// }

// let arr = [5, 6, 8, 2];
// export function test() {
//   let sum = 0;
//   for (let i of arr) {
//     sum += i;
//   }
//   return sum / arr.length;
// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// export function add() {
//   let arr3 = [];
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//       arr3.unshift(arr2[i]);
//     } else {
//       arr3.push(arr2[i]);
//     }
//   }
//   return arr3;
// }

// // let arr2 = [12, 54, 78, 23, 89, 5, 2, 6, 1, 18];
// // let odd = arr2.filter((val) => val % 2 === 0);
// // let even = arr2.filter((val) => val % 2 === 1);
// // let ans = odd.concat(even);
// // console.log(ans);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// export function oddEven() {
//   let sum = [];
//   for (let i = 0; i < arr1.length; i++) {
//     switch (arr1[i] % 2) {
//       case 0:
//         sum.unshift(arr1[i]);
//         break;
//       default:
//         sum.push(arr1[i]);
//     }
//   }
//   return sum;
// }

// let first = [5, 5, 5];
// let sum = 0;
// for (let i = 0; i < first.length; i++) {
//   sum += first[i];
//   first[i]++;
// }
// console.log("Sum:", sum);
// console.log("Incremented Array:", first);

// let somNum = [52, 5, 25, 5, 25];
// let i = 0;
// for (let val of somNum) {
//   let off = val / 10;
//   somNum[i] -= off;
//   console.log(off);
//   console.log(somNum[i]);
//   i++;
// }
// console.log(i);

// --------------------------------------default function name -----------------------------------------------------------

// export default function () {
//   console.log("this is a default fun... it's not name");
// }

// ----------------------------ek sath export-------------------------------------------

// let id = setInterval((val) => {
//   console.log("hello");
// }, 1000);
// setTimeout((val) => {
//   clearInterval(id);
// }, 5000);

// let id1 = 200;

// let hi = "Hi...";

// function fun() {
//   console.log("this is a hi func...");
// }
// export { hi, id, id1, fun };

// ------------------------aggregate module--------------------------------------------
// first.js
function aggregate() {
  return "hello";
}
export { aggregate };
