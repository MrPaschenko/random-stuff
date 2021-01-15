'use strict';

class User {
  constructor(name) {
    this.name = name;
    this.sayHiCounter = 0;
  }
  sayHi() {
    this.sayHiCounter++;
    return `Hello from ${this.name}! Counter is ${this.sayHiCounter}`;
  }
}

const petya = new User('Petya');
console.dir(petya);

console.log(petya.sayHi());
console.log(petya.sayHi());
console.log(petya.sayHi());
console.log(petya.sayHi());
console.log(petya.sayHi());
console.log(petya.sayHi());

console.dir(petya);
