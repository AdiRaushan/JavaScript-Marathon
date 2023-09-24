// big O notation

const addUpto = (n) => {
  return (n * (n + 1)) / 2;
};

// const addIn = (n) => {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };
let time1 = performance.now();
// console.log(addIn(600000000));
console.log(addUpto(6));
let time2 = performance.now();
console.log(`time for its run ${(time1 - time2) / 1000} seconds`);
