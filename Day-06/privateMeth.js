class Counter {
  #count = 0;
  #prefix = "Counter";

  #increment() {
    this.#count += 1;
    return this.#count;
  }

  #formatCount() {
    return `${this.#prefix}: ${this.#count}`;
  }

  incrementAndGet() {
    this.#increment();
    return this.#formatCount();
  }

  getCount() {
    return this.#formatCount();
  }
}

const counter = new Counter();
console.log(counter.incrementAndGet());
console.log(counter.incrementAndGet());
console.log(counter.getCount());
// console.log(counter.increment());
