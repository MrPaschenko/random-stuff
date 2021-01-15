'use strict';

function arraySlicer(arr, num) {
  const newArr = [];
  for (let i = 0; i < num; i++) {
    const start = i * ((arr.length) / num);
    const end = start + ((arr.length) / num);
    newArr[i] = arr.slice(start, end);
  }
  return newArr;
}

const array = [1, 2];

console.log(arraySlicer(array, 5));
