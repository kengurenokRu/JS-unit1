'use strict';

(() => {
  const figuresRus = {
    name: ['камень', 'ножницы', 'бумага'],
    ruls: {
      'кн': 1,
      'кб': 0,
      'нб': 1,
      'нк': 0,
      'бк': 1,
      'бн': 0
    },
  }
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const getFigure = () => {
    const figureNumber = getRandomIntInclusive(0, 2);
    return figuresRus.name[figureNumber].charAt(0);
  };

  const exitQuestion = () => {
    const myChoice = confirm('Вы действительно хотите отказаться от розыгрыша первого хода?');
    if (myChoice) return null;
    else return false;
  };

  const choice = () => {
    let myChoice = prompt(`${figuresRus.name}?`);
    if (myChoice === null) {
      if (exitQuestion() === null) return null;
      else return choice();
    }
    myChoice = myChoice.toLocaleLowerCase().charAt(0);
    if (myChoice !== figuresRus.name[0].charAt(0) &&
      myChoice !== figuresRus.name[1].charAt(0) &&
      myChoice !== figuresRus.name[2].charAt(0)) {
      return choice();
    } else return myChoice;
  };

  const game = () => {
    const figures = [figuresRus.name[0].charAt(0), figuresRus.name[1].charAt(0), figuresRus.name[2].charAt(0)];
    return function start() {
      const player = choice();
      const computer = getFigure();
      if (player === null) {
        alert('Вы отказались разыгрывать первый ход! Первый ходит Компьютер');
        return false;
      } else {
        if (player === computer) {
          alert(`Ничья! Пробуем еще раз`);
          return start();
        } else if (figuresRus.ruls[`${computer}${player}`] === 1) {
          alert('Первый ходит Компьютер!');
          return false;
        } else {
          alert('Первый ходит Игрок!');
          return true;
        }
      }
    };
  };

  window.rps = game;
})();
