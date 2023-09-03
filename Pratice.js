// for 100 days i'll be doing 5 question every day to improve js pratice

// Question 1 : checking the sum of zero
// [-5,-4,-6,-9,2,1,4,-9,-3,-2] ----> input
// [-4, 4]; --> output
const GetSumOfZero = (arr) => {
  for (let number of arr) {
    // console.log(number);
    for (let j = 1; j < arr.length; j++) {
      if (number + arr[j] === 0) {
        return [number, arr[j]];
      }
    }
  }
};

const result = GetSumOfZero([-5, -4, 6, -5, 2, 1, 4, -9, -3, -2]);
console.log(result);

// Improvised version--------
// ---------------------------------------------------------------------
