function timer(fn) {
  return function (...args) {
    const start = performance.now();
    const result = fn.apply(this, args);
    const end = performance.now();
    console.log(`Execution Time: ${end - start}ms`);
    return result;
  };
}

const sum = (a, b) => a + b;

const fastSum = timer(sum);

console.log(fastSum(23225344322310, 2234588287986562));
