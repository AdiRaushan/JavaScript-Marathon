// Find Maximum Value: Create a function that finds the maximum value in an array of numbers.

/* const MaxValue = () => {
  let arr = [12, 12, 1, 2, 12, 1, 21, 2, 12, 12, 1];
  arr.sort();
  console.log(arr);
  return arr[arr.length - 1];
};

console.log(MaxValue()); */
// we solve this using math.max mthod along with spread operator
// also using for loop and reduce method

let arr = [77, 12, 12, 1, 2, 12, 1, 21, 2, 12, 12, 1];

const Findmax = arr.reduce((max, currentvalue) => {
  return currentvalue > max ? currentvalue : max;
});

console.log(Findmax);
