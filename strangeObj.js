'use strict';

const definition = {
  field1: 'string',
  field2: { type: 'object' },
  field3: { type: 'number', min: 0, max: 100 },
  field4: { type: 'number', between: [0, 100] },
  field5: 'string(10)',
  field6: { type: 'string', length: 10 },
};

const prepare = obj => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === 'string') {
      const regexp = /\w+\(\d+\)/;
      const str = obj[key];
      obj[key] = { type: 'string' };
      if (regexp.test(str)) Object.assign(obj[key], { length: str.length });
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (obj[key].hasOwnProperty('between')) {
        obj[key].min = obj[key].between[0];
        obj[key].max = obj[key].between[1];
        delete obj[key].between;
      }
    }
  }
};

prepare(definition);
console.log(definition);

// result: {
//   field1: { type: 'string' },
//   field2: { type: 'object' },
//   field3: { type: 'number', min: 0, max: 100 },
//   field4: { type: 'number', min: 0, max: 100 },
//   field5: { type: 'string', length: 10 },
//   field6: { type: 'string', length: 10 },
// };
