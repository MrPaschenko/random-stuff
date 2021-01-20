'use strict';

const checkObjects = (obj1, obj2) => {
  const objKeys1 = Object.keys(obj1);
  for (const key of objKeys1) {
    if (typeof obj1[key] !== 'object') {
      if (obj1[key] === obj2[key]) continue;
      else return false;
    }
    if (obj1[key] === null) {
      if (obj1[key] !== obj2[key]) return false;
    } else return checkObjects(obj1[key], obj2[key]);
  }
  return true;
};

const obj1 = {
  student: true,
  university: 'KPI',
  age: 18,
  something: { a: 123 },
};

const obj2 = {
  student: true,
  university: 'KPI',
  age: 18,
  something: { a: 123 },
};

console.log(checkObjects(obj1, obj2));
