function area(shape, ...args) {
  if (shape === "circle") {
    return new Function("r", "return Math.PI * r * r")(args[0]);
  }
  if (shape === "rectangle") {
    return new Function("l", "b", "return l * b")(args[0], args[1]);
  }
}

console.log(area("circle", 7));
console.log(area("rectangle", 4, 5));
