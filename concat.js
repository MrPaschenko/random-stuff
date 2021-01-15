'use strict';

const merge = (arr1, ...args) => arr1.concat(args).flat();

const arr1 = [1, 2, 3];
const arr2 = ['first', 'second', 'third'];
const arr3 = [true, false];
const arr4 = ['this is fourth array'];

console.log(merge(arr1, arr2, arr3, arr4));
