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

  const moveComputer = () => {
    return getRandomIntInclusive(1, number);
  };

  const checkEnd = (score) => {
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
    const move = true; //true - ходит игрок, false - ходит компьютер

    return function start() {
      if (checkEnd) {
        if (move) {
          let number = prompt('Введите ваше число');
          if (isNull(number)) {
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
            move = false;
          }
        }
        else {
          const number = moveComputer();
          const userParity = prompt('Введите четное или нечетное');
          if (isNull(userParity)) {
            if (exitQuestion() === null) return null;
            else return start();
          }

          const tempNumber = (userParity.charAt(0) === 'ч') ? checkParity(number, 0) : checkParity(number, 1);
          if (tempNumber < 0) {
            alert('Вы не угадали.');
          }
          else {
            alert('Вы угадали.');
          }
          score.player += tempNumber;
          move = true;
        }
        return start();
      }
    }
  };
  window.marbles = game;
})();
