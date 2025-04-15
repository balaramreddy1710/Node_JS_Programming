function isFullyBalanced(str) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  };

  const openingBrackets = Object.values(bracketPairs);
  const closingBrackets = Object.keys(bracketPairs);

  for (let char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  const cleanStr = str.replace(/[()\[\]{}<>]/g, "");
  if (cleanStr.length % 2 !== 0) return false;

  const half = cleanStr.length / 2;
  const left = cleanStr.slice(0, half);
  const right = cleanStr.slice(half).split("").reverse().join("");

  return left === right;
}

console.log(isFullyBalanced("ab[cc]ba"));
console.log(isFullyBalanced("ab[c]ba"));
