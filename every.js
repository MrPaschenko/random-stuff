'use strict';

const every = (array, fn) => {
  let cache = 0;
  for (const element of array) {
    if (fn(element) === true) ++cache;
  }
  return cache === array.length;
};

const someArray = [0, 2, 0, 4, 0];
const even = element => element % 2 === 0;

console.log(every(someArray, even));
