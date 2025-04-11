const func = function (n) {
  if (n === 1) return 1;
  return n + func(n - 1);
};

console.log(func(5));
