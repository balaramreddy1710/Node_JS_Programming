function permute(str) {
  if (str.length <= 1) return [str];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let rest = str.slice(0, i) + str.slice(i + 1);
    for (let perm of permute(rest)) {
      result.push(char + perm);
    }
  }
  return result;
}

console.log(permute("abc"));
