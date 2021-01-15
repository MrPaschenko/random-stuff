'use strict';

class Mymap {
  constructor() {
    this.clue = [];
    this.sense = [];
  }
  set(key, value) {
    this.clue.push(key);
    this.sense.push(value);
  }
  get(key) {
    for (let i = 0; i < this.clue.length; i++) {
      if (this.clue[i] === key) return this.sense[i];
    }
    return undefined;
  }
  has(key) {
    return this.clue.includes(key);
  }
  delete(key) {
    for (let i = 0; i < this.clue.length; i++) {
      if (this.clue[i] === key) {
        this.clue.splice(i, 1);
        this.sense.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  size() {
    return this.clue.length;
  }
  clear() {
    this.clue.splice(0, this.clue.length);
    this.sense.splice(0, this.values.length);
  }
  keys() {
    const iterator = [];
    for (let i = 0; i < this.clue.length; i++) {
      iterator.push(this.clue[i]);
    }
    return iterator;
  }
  values() {
    const iterator = [];
    for (let i = 0; i < this.sense.length; i++) {
      iterator.push(this.sense[i]);
    }
    return iterator;
  }
  entries() {
    const iterator = [];
    for (let i = 0; i < this.clue.length; i++) {
      iterator.push([this.clue[i], this.sense[i]]);
    }
    return iterator;
  }
  forEach(fn) {
    for (let i = 0; i < this.clue.length; i++) {
      fn(this.clue[i], this.sense[i]);
    }
  }
}

const fn = (key, value) => {
  console.log(key, value);
};

const map = new Mymap();
map.set(1, 5);
map.set('a', true);
map.set('mama', 'family');
map.set('5', false);
console.log('map.entries():', map.entries());
console.log('map.keys():', map.keys());
console.log('map.values():', map.values());
console.log('map.get(1):', map.get(1));
console.log('map.size():', map.size());
console.log('map.has("mama"):',  map.has('mama'));
console.log('map.has("papa"):',  map.has('papa'));
console.log('map.delete("mama"):', map.delete('mama'));
console.log('map.has("mama"):',  map.has('mama'));
console.log('map.forEach(fn):');
map.forEach(fn);
