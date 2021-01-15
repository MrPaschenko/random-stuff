'use strict';

const x = {
  i: -1,
  toString() {
    this.i++;
    return this.i;
  },
};

const obj = { [x]: 'value1', [x]: 'value2' };

console.log(obj);
