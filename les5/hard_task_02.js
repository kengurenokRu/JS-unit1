'use strict'

const number1 = Number(prompt('Введите первое число:'));
const number2 = Number(prompt('Введите второе число:'));

const min = (num1, num2) => ((num1 + num2) - Math.abs(num1 - num2)) / 2;

console.log(min (number1, number2));
