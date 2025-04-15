let st = ["A", "B", "C", "D"];

let list = [];

for (let i = 0; i < st.length; i++) {
  for (let j = i + 1; j < st.length; j++) {
    list.push(Array(`${st[i]},${st[j]}`));
  }
}

console.log(...list);
