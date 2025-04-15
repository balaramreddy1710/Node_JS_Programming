class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discount) {
    return this.price - (this.price * discount) / 100;
  }
}

const p1 = new Product("TV", 30000);
console.log(p1.discountedPrice(12.5));
