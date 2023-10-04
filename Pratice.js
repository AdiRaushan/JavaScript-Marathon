const AvgSum = () => {
  // i created the array
  let arr = [12, 12, 1, 2, 12, 1, 21, 2, 12, 12, 1];
  // then use the reduce to plus the current value and different value and then divide with lenghth of array
  const sum = arr.reduce((a, b) => a + b) / arr.length;
  // then return the sun
  return sum;
};
console.log(AvgSum());
