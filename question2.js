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

const MaxValue2 = () => {
  let arr = [12, 12, 1, 2, 12, 1, 21, 2, 22, 12, 12, 1];
  let maxValue = arr[0];
  //   console.log(maxValue);
  for (i = 1; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

console.log(MaxValue2());
