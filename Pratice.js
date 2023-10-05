// Sum of Array Elements: Write a function that calculates the sum of all the elements in an array of numbers.

const SumofArr = () => {
  let arr = [12, 12, 1, 2, 12, 1, 21, 2, 12, 12, 1];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(SumofArr());
