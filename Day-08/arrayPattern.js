let arr = [2, 1, 2, 3, 4, 7, 8, 9, 6];

let pattern = [2, 1, 3, 8];
let rest = [];
let has = [];

for (let i of pattern) {
  for (let a of arr) {
    if (a == i) {
      has.push(a);
    }
  }
}

for (let i of arr) {
  if (!pattern.includes(i)) {
    rest.push(i);
  }
}

rest.sort((a, b) => a - b);

console.log([...has, ...rest]);
