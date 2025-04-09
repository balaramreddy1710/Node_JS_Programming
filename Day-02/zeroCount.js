function countZeros(n) {
  if (n === 0) return 1;
  if (n < 10) return n === 0 ? 1 : 0;
  return (n % 10 === 0 ? 1 : 0) + countZeros(Math.floor(n / 10));
}

console.log(countZeros(102030));
