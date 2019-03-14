class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const Clazz = User
console.log(Clazz);
console.log(new Clazz('typescript'));
