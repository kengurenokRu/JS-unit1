'use strict';

(() => {

  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const parity = () => {
    return getRandomIntInclusive(0, 1); // 0 - чётное; 1 - нечетное
  };

  const checkParity = (number, parityUser = -1) => {
    if (parityUser === -1) {
      if (number % 2 === parity()) return number;
      else return -number;
    }
    else {
      if (number % 2 === parityUser) return number;
      else return -number;
    }
  };

  const moveComputer = (number) => {
    return getRandomIntInclusive(1, number);
  };

  const checkEnd = (score) => {
    console.log(score.player);
    if (score.player <= 0) {
      alert('Вы приграли!');
      return false;
    }
    else if (score.computer <= 0) {
      alert('Вы выиграли!');
      return false;
    }
    return true;
  };

  const exitQuestion = () => {
    const myChoice = confirm('Вы действительно хотите выйти?');
    if (myChoice) return null;
    else return false;
  };


  const game = () => {
    const score = {
      player: 5,
      computer: 5,
    }
    const rps = window.rps();
    let move = rps(); //true - ходит игрок, false - ходит компьютер

    return function start() {

      if (move) {
        let number = prompt('Введите ваше число');
        if (number === null) {
          if (exitQuestion() === null) return null;
          else return start();
        }
        number = Number(number);
        if (isNaN(number) || (number > score.player) || (number === 0)) {
          alert('Ошибка ввода. Повторите ввод.');
        }
        else {
          const tempNumber = checkParity(number);
          if (tempNumber < 0) {
            alert('Компьютер не угадал.');
          }
          else {
            alert('Компьютер угадал.');
          }
          score.computer += tempNumber;
          score.player -= tempNumber;
          move = false;
        }
      }
      else {
        const number = moveComputer(score.computer);
        const userParity = prompt('Введите четное или нечетное');
        if (userParity === null) {
          if (exitQuestion() === null) return null;
          else return start();
        }        
          if ((userParity.charAt(0) !== 'ч') && (userParity.charAt(0) !== 'н')) {
            alert('Ошибка ввода. Повторите ввод.');
          }
          else {
            const tempNumber = (userParity.charAt(0) === 'ч') ? checkParity(number, 0) : checkParity(number, 1);
            if (tempNumber < 0) {
              alert('Вы не угадали.');
            }
            else {
              alert('Вы угадали.');
            }
            score.player += tempNumber;
            score.computer -= tempNumber;
            move = true;
          }
      }
      console.log(`Компьютер: ${score.computer}, Игрок: ${score.player}`);
      if (checkEnd(score)) {
        return start();
      }
      return 0;
    }
  };
  window.marbles = game;
})();
