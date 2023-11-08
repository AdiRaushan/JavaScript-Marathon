const createCounter = (n) => {
  let i = n;

  return function Counter() {
    const value = i;
    i += 1;
    return value;
  };
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

const secondcounter = createCounter(100);

console.log(secondcounter());
console.log(secondcounter());
console.log(secondcounter());
console.log(secondcounter());
console.log(secondcounter());
