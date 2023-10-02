class User {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get newUser() {
    return `${this._firstName} ${this._lastName}`;
  }

  set newUser(value) {
    const [_firstName, _lastName] = value.split(" ");
    this.firstName = _firstName;
    this.lastName = _lastName;
  }
}

const user1 = new User("Uyang", "Barco");
const newUser1 = (user1.newUser = "Kyle Barco");
console.log(newUser1);
