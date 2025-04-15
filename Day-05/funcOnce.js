function runOnce(fn) {
  let executed = false;
  return function (...args) {
    if (!executed) {
      executed = true;
      return fn.apply(this, args);
    } else {
      console.log("Function can only be run once.");
    }
  };
}

const display = runOnce(() => console.log("Running..."));

display();
display();
