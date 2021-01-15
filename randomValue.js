'use strict';

const randomValue = arr => arr[Math.round(Math.random() * arr.length)];


const array = [1, 544, 'xyz', true, 'it was bad trip'];

console.log(randomValue(array));
