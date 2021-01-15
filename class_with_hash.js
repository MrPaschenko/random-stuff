'use strict';

//Class syntax
class MyClass {
  constructor() {
    this._hash = {};
  }
  add(key, value) {
    if (key !== undefined && value !== undefined && key.toString().length > 0) {
      Object.assign(this._hash, { [key]: value });
      return [key, value];
    } else return null;
  }
  get hash() {
    return this._hash;
  }
}

const a = new MyClass();
a.add('type', 'object');
a.add(6, null);
a.add('number', 0);
console.log(a.hash);

//Prototype syntax
function MyClassProto() {
  this._hash = {};
}

MyClassProto.prototype.add = function(key, value) {
  if (key !== undefined && value !== undefined && key.toString().length > 0) {
    Object.assign(this._hash, { [key]: value });
    return [key, value];
  } else return null;
};

Object.defineProperties(MyClassProto.prototype, {
  hash: {
    get() {
      return this._hash;
    }
  }
});

const b = new MyClassProto();
b.add('type', 'object');
b.add(6, null);
b.add('number', 0);

console.log(a.hash);
