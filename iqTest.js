'use strict';

function iqTest(stringOfNumbers) {
  const arrayOfNumbers = stringOfNumbers.split(' ');
  let a = 0;
  for (const num of arrayOfNumbers) if (num % 2 === 0) a++;
  let newArray;
  if (a === 1) {
    newArray = arrayOfNumbers.filter(num => num % 2 === 0);
  } else {
    newArray = arrayOfNumbers.filter(num => num % 2 !== 0);
  }
  const number = newArray.join('');
  return (arrayOfNumbers.indexOf(number) + 1);
}

console.log(iqTest('2 4 7 8 10'));
console.log(iqTest('1 2 2'));
