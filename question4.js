// Reverse an Array: Create a function that reverses the order of elements in an array without modifying the original array.

const ReverseArr = (arr) => {
  let ReverseArrya = [];
  for (i = 0; i < arr.length; i++) {
    ReverseArrya.push(arr[i]);
    ReverseArrya.reverse();
  }
  return ReverseArrya;
};

let arr = [4, 6, 3, 8, 2, 6, 9, 4, 3, 56, 8, 4, 6, 4, 7, 34, 6, 4, 5];

console.log(ReverseArr(arr));
console.log(arr);
