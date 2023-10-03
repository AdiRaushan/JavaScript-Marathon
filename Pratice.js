const AvgSum = () => {
  let arr = [12, 12, 1, 2, 12, 1, 21, 2, 12, 12, 1];
  const sum = arr.reduce((a, b) => a + b) / arr.length;
  return sum;
};
console.log(AvgSum());
