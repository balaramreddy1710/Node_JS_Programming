function maxProduct(arr) {
  let [a, b] = arr.sort((x, y) => y - x);
  return a * b;
}

let a = [3, 5, 7, 2];
console.log(maxProduct(a));
