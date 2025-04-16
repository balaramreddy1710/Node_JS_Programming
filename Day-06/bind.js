class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

const user = new User("Alice");
const boundGreet = user.greet.bind(user);
console.log(boundGreet());
