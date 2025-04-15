class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  average() {
    const sum = this.marks.reduce((a, b) => a + b, 0);
    return sum / this.marks.length;
  }
}

const s2 = new Student("Ravi", [80, 85, 90]);
console.log(s2.average());
