function intro(greeting, msg) {
  console.log(`${greeting}, I'm ${this.name}. ${msg}`);
}

const user = { name: "Ram" };
intro.apply(user, ["Hello", "Signing Off!"]);
