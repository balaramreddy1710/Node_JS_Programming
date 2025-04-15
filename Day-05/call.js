const person1 = {
  name: "Alice",
};

const person2 = {
  name: "Sammy",
};

function greet(msg) {
  console.log(`${msg} ${this.name}`);
}

greet.call(person1, "Hi");
greet.call(person2, "Hello");
