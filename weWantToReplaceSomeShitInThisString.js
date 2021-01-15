'use strict';

function weWantToReplaceSomeShitInThisString(str, s1, s2) {
  str = str.replace(s1, s2);
  if (str.includes(s1)) return weWantToReplaceSomeShitInThisString(str, s1, s2);
  return str;
}
const string = 'hello';
console.log(weWantToReplaceSomeShitInThisString(string, 'hell', '0'));
