'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const RUS = [
    'Компьютер',
    'Игрок',
    'Ничья',
    'Победил Компьютер!',
    'Победил Игрок!',
  ];
  const ENG = [
    'Computer',
    'Player',
    'Draw',
    'The Computer Won!',
    'The Player Won!',
  ];

  /**
   *
   */
  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const getFigure = lang => {
    const figureNumber = getRandomIntInclusive(0, 2);
    return lang[figureNumber].charAt(0);
  };

  const exitQuestion = (language) => {
    const question = language === 'EN' ||
      language === 'ENG' ?
      'Are you sure you want to leave?' :
      'Вы действительно хотите выйти?';
    const myChoice = confirm(question);
    if (myChoice) return null;
    else return false;
  };

  const choice = (lang, language) => {
    let myChoice = prompt(`${lang}?`);
    if (myChoice === null) {
      if (exitQuestion(language) === null) return null;
      else return choice(lang, language);
    }
    myChoice = myChoice.toLocaleLowerCase().charAt(0);
    if (myChoice !== lang[0].charAt(0) &&
      myChoice !== lang[1].charAt(0) &&
      myChoice !== lang[2].charAt(0)) {
      return choice(lang, language);
    } else return myChoice;
  };

  const game = (language = 'RUS') => {
    const languageTemp = language.toUpperCase();
    const result = {
      player: 0,
      computer: 0,
      count: 0,
    };
    const lang = languageTemp === 'EN' || languageTemp === 'ENG' ?
    FIGURES_ENG :
    FIGURES_RUS;
    const face = languageTemp === 'EN' || languageTemp === 'ENG' ? ENG : RUS;
    const figures = [lang[0].charAt(0), lang[1].charAt(0), lang[2].charAt(0)];

    console.log(figures);
    return function start() {
      const player = choice(lang, languageTemp);
      const computer = getFigure(lang);
      if (player === null) {
        alert(`${face[0]}: ${result.computer}, ${face[1]}: ${result.player}, ${face[2]}: ${result.count - result.player - result.computer}`);
        return;
      } else {
        console.log(player, computer);
        if (player === computer) {
          alert(`${face[2]}!`);
        } else if ((player === figures[0] && computer === figures[2]) ||
          (player === figures[1] && computer === figures[0]) ||
          (player === figures[2] && computer === figures[1])) {
          result.computer++;

          alert(`${face[3]}!`);
        } else {
          alert(`${face[3]}!`);
          result.player++;
        }
        result.count++;
        return start();
      }
    };
  };

  window.rps = game;
})();
