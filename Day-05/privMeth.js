class Car {
  start() {
    this.#engineStart();
    console.log("Car Started");
  }

  #engineStart() {
    console.log("Engine Ready");
  }
}

const car = new Car();
car.start();
// car.#engineStart();
