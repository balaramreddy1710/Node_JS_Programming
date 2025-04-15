class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    return `${this.name} is of ${this.age} years old`;
  }
}

const P = new Person("Ram", 25);
console.log(P.display());
