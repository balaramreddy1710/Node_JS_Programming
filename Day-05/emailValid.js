class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  validEmail() {
    if (this.email.includes("@")) {
      console.log("The email is Valid");
    } else {
      console.log("The email is not Valid");
    }
  }
}

const u1 = new User("Alice", "alice@gmail.com");
u1.validEmail();
