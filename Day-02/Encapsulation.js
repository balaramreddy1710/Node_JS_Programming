class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("Name too short!");
    } else {
      this._name = newName;
    }
  }
}

let u = new User("Jo");
u.name = "Al";
u.name = "Alice";
console.log(u.name);
