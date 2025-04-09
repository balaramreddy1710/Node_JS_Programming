class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height + " cm^2";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius + " cm^2";
  }
}

const r = new Rectangle(10, 20);
console.log(r.area());
const c = new Circle(12);
console.log(c.area());
