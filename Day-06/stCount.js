let ar = ["aaabbb", "cccbbaa", "abcd", "banana"];

let ans = [];

for (let c of ar) {
  let map = new Map();
  for (let char of c) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  let fact = 1;
  for (let i = c.length; i > 1; i--) {
    fact *= i;
  }

  let repeat = 1;
  for (let [_, val] of map) {
    for (let i = val; i > 1; i--) {
      repeat *= i;
    }
  }

  ans.push(fact / repeat);
}

for (let i = 0; i < ar.length; i++) {
  console.log(`${ar[i]} : ${ans[i]}`);
}
