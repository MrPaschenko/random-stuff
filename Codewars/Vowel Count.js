'use strict';

function getCount(str) {
  const regExp = /[aeiou]/;
  let vowelsCount = 0;
  const arr = str.split('');
  for (const value of arr) {
    if (regExp.test(value)) {
      vowelsCount++;
    }
  }
  console.log(arr);
  return vowelsCount;
}

console.log(getCount('some String'));
