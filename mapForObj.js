'use strict';

function map(obj, fn) {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = fn(obj[key]);
  }
  return newObj;
}

const someCity = {
  year: 1992,
  city: 'Kyiv',
  isUSSR: false,
  age: 1992 - 1037,
};
const plusTwo = x => x += 2;

console.dir(map(someCity, plusTwo));
