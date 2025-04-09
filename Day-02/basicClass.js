class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi my name is ${this.name}, I'm ${this.age} years old`);
  }
}

const p = new Pet("Loki", 4);
console.log(p.name);
p.greet();
