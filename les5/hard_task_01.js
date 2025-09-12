'use strict'

const number1 = Number(prompt('Введите первое число:'));
const number2 = Number(prompt('Введите второе число:'));

const NOD = (num1, num2) => {
  const min = num1 < num2 ? num1 : num2;
  let res = 0;
  for (let i = min; i >= 1; i--) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }
}

console.log(NOD(number1, number2));