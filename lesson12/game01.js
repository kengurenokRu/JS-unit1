'use strict';

const checkResult = (number) => {
  const userInput = Number(prompt('Введите число от 1 до 100'));
  if (userInput === 0) return;
  if (userInput === number) {
    alert('Верно!'); return;
  };
  if (userInput < number) {
    alert('Больше!'); checkResult(number);
  } else {
    alert('Меньше!'); checkResult(number);
  }
};

const game = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
  checkResult(number);
};

game();
