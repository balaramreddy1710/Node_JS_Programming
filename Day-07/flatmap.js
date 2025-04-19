function flatMapDeep(arr, func) {
  return arr.flatMap((ele) =>
    Array.isArray(ele) ? flatMapDeep(ele, func) : [func(ele)]
  );
}
const arr = [
  [
    [1, 2],
    [3, [4]],
  ],
  [[5], [6, [7, 8]]],
];
console.log(flatMapDeep(arr, (x) => x * 3));
