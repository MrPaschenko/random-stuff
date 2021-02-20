'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter x: ', x => {
  rl.question('Enter y: ', y => {
    rl.question('Enter action symbol (eg. +): ', math => {
      switch (math) {
      case '+' :
        console.log(x + y);
        break;

      case '-' :
        console.log(x - y);
        break;

      case '*' :
        console.log(x * y);
        break;

      case '/' :
        console.log(x / y);
        break;

      case '^' :
        console.log(Math.pow(x, y));
        break;

      default:
        console.log('Ya ne takoi krutoi calculator kak ti dumaesh<3');
        break;
      }

      rl.close();
    });
  });
});
