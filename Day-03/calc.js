function calculator(expression) {
  return new Function("return " + expression)();
}

console.log(calculator("2 + 3 * 4 ** 2"));
console.log(calculator("10 / 2 + 5"));
