'use strict';

function firstNElements(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
}

const array = [true, false, 'first', 'third', 'second', 123, 999];

firstNElements(array, 5);
