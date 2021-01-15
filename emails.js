'use strict';

const string1 = '12123@gmail.com, skghh@mail.ru, sfsdf@ya.ru, sdflkjsg@gmail.com, sdkgfjsg;l, 500100';

const array1 = string1.split(',');

for (let key in array1) {
  array1[key] = array1[key].trim();
}

array1.map(item => item.trim());

const emails = array1.filter(value => value.includes('@'));

const names = [];
const domains = [];

for (let key in emails) {
  let temp = emails[key].split('@');
  names.push(temp[0]);
  domains.push(temp[1]);

}

console.log(emails);
console.log(names);
console.log(domains);
