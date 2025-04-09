function printArray(arr, i = 0) {
  if (i >= arr.length) return;
  console.log(arr[i]);
  printArray(arr, i + 1);
}

printArray([10, 20, 30]);
