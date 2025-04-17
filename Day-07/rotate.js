function rotate(nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(-k));
  return nums;
}

let a = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

console.log(rotate(a, k));
