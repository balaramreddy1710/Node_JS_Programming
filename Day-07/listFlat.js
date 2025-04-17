function flat(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flat(val)) : acc.concat(val),
    []
  );
}

console.log(flat([1, [2, [3, [4]]]]));
