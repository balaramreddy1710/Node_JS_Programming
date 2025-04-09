const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "Delhi" };

console.log(updatedUser);
