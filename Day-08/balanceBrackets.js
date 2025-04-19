function isBalanced(str) {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };
  for (let char of str) {
    if (Object.values(map).includes(char)) stack.push(char);
    else if (map[char]) {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("({[]})"));

console.log(isBalanced("({[}])"));
