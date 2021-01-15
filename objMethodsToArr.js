'use strict';

const object = {
  sayHi() {
    console.log('Hello!');
  },
  sayBye() {
    console.log('some string');
  },
  name: 'vladilen',
};

const array = [];

for (const key in object) {
  const name = object[key];
  if (typeof name === 'function') array.push(key);
}

console.log(array);
