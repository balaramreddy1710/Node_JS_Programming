const reverseNum = function rev(n, result = 0) {
  if (n === 0) return result;
  return rev(Math.floor(n / 10), result * 10 + (n % 10));
};

console.log(reverseNum(1234));
