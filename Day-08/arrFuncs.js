let arr = [1, 2, 3, 4, 5, 6];

const reverseArray = (arr) => arr.slice().reverse();
console.log(reverseArray(arr));

const sumArray = (arr) => arr.reduce((a, b) => a + b, 0);
console.log(sumArray(arr));

const averageArray = (arr) => sumArray(arr) / arr.length;
console.log(averageArray(arr));
