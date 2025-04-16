function sayHi() {
  console.log(`Hi from ${this.name}`);
}

const user = { name: "Dev" };
sayHi.call(user);
