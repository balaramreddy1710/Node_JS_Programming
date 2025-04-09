const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);

const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, city: "Delhi" };

console.log(updatedUser);

function greet(a, b, c) {
  console.log(a, b, c);
}

const args = ["Hello", "World", "!"];
greet(...args);
