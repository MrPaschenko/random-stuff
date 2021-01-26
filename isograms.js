'use strict';

function isIsogram(str) {
  const array = str.toLowerCase().split('');
  for (const k in array) {
    const v = array[k];
    if (array.indexOf(v) !== parseFloat(k)) return false;
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram('isIsogram'));
console.log(isIsogram(''));
