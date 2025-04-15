function countCalls(fn) {
  let count = 0;
  return function (...args) {
    count++;
    console.log(`Function called ${count} times`);
    return fn.apply(this, args);
  };
}

function greet(name) {
  console.log(`Hello, ${name}`);
}

const decoratedGreet = countCalls(greet);

decoratedGreet("Alice");
decoratedGreet("Bob");
decoratedGreet("John");
