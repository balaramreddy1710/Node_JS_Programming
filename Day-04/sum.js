function addNumbers(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  console.log("Sum =", sum);
}

addNumbers(1, 2, 3);
addNumbers(5, 10, 15, 20, 25);
