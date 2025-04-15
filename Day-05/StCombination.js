let ar = ["aaabbb", "bbbcccddd", "abcd"];

let ans = [];
for (let char of ar) {
  let s = new Set(char);

  let z = s.size;

  function perm(z) {
    if (z == 0) {
      return 1;
    } else {
      return z * perm(z - 1);
    }
  }
  ans.push(perm(z));
}

console.log(ans);
