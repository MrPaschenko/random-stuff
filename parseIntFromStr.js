'use strict';

const str = 'a12b34';

const normalize = str => {
  const allowedArr = '1234567890'.split('');
  return str.split('').filter(value => allowedArr.includes(value)).join('');
};

console.log(normalize(str)); // 1234
