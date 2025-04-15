function sum(...args) {
  let s = 0;
  for (let num of args) {
    s += num;
  }
  console.log(s);
}

const numbers = [10, 20, 30, 560];

sum.apply(null, numbers);
