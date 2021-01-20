'use strict';

const checkArrays = (a1, a2) => {
  if (a1 === a2) {
    return true;
  }
  if (a1.length !== a2.length) {
    return false;
  }
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};

console.log(checkArrays([7, 6, 3], [1, 2, 5]));
console.log(checkArrays([1, 2, 5], [1, 2, 5]));
console.log(checkArrays(['1', 2, 5], [1, 2, 5]));
console.log(checkArrays([1, 2, 5], [1, 2, 6]));
console.log(checkArrays([1, 2, 5, 6, 7], [1, 2, 5]));
