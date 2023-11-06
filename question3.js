// Filter Even Numbers: Write a function that takes an array of numbers and returns a new array with only the even numbers.

/* const EvenNum = () => {
  let arr = [4, 6, 3, 8, 2, 6, 9, 4, 3, 56, 8, 4, 6, 4, 7, 34, 6, 4, 5];
  let evenArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //   console.log(arr[i]);
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
};
console.log(EvenNum()); */

const EvenNum = () => {
  const arr = [4, 6, 3, 8, 2, 6, 9, 4, 3, 56, 8, 4, 6, 4, 7, 34, 6, 4, 5];

  for (const num of arr) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
};
