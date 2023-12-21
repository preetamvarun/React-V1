class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function name() {
  console.log(this.name);
}

function age() {
  console.log(this.age);
}

export default User;

export { name, age };
