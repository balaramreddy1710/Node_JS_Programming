const mergeSort = (a, b) => [...a, ...b].sort((x, y) => x - y);

let a = [2, 4, 1, 3];

let b = [7, 6, 5, 8];

console.log(mergeSort(a, b));
