let oddEven = new Function(
  "num",
  `
    if (num % 2 == 0){
    return "Even"}
    else{
    return "Odd"}`
);

console.log(oddEven(87));
console.log(oddEven(70));
