'use strict';

// const isPalindrome = str => str.split('').reverse().join('') === str;

const isPalindrome = (word, strict = true) => {
  const simplify = word => word
    .split('')
    .filter(char => char !== ' ')
    .join('')
    .toLowerCase();

  let inverted = word
    .split('')
    .reverse()
    .join('');

  if (!strict) {
    inverted = simplify(inverted);
    word = simplify(word);
  }
  console.log(inverted);
  return word === inverted;
};

console.log(isPalindrome('А роза упала на лапу Азора', true));
