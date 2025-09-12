'use strict'

const myStr = prompt('Введите вашу строку:');

const result = (str) => str.split('').reverse().join('');

console.log(result(myStr));