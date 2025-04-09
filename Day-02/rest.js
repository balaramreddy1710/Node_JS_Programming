function show(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}

show("a", "b", "c", "d");

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
