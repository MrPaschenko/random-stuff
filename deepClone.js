'use strict';

function cloneObject(obj) {
  const clone = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === 'object' && value !== null && !Array.isArray(value))
      clone[key] = cloneObject(value);
    if (Array.isArray(value) && value !== null)
      clone[key] = value.concat();
    else
      clone[key] = value;
  }
  return clone;
}

const obj = {
  a: 1,
  b: {
    c: 2
  },
  d: [1, 2, 3],
  k: null,
};

const newObj = cloneObject(obj);

console.log('obj', obj);
console.log('newObj', newObj);

console.log('obj.d === newObj.d:', obj.d === newObj.d);

console.log('Array.isArray(\'string\'):', Array.isArray('string'));
