'use strict';

const checkResult = (number) => {
  const userInput = Number(prompt('Введите число от 1 до 100'));
  if (userInput === 0) return 0;
  if (userInput === number) {
    return 1;
  };
  if (userInput < number) {
    alert('Больше!'); return checkResult(number);
  } else {
    alert('Меньше!'); return checkResult(number);
  }
};

const game = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
  if (checkResult(number) === 1) alert('Верно!');
};

game();
