'use strict';

const some = (array, fn) => {
  for (const element of array) {
    if (fn(element) === true) return true;
  }
  return false;
};

const someArray = [1, 3, 3, 5, 5];
const even = element => element % 2 === 0;

console.log(some(someArray, even));
