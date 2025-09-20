let userInput;
let endGame;

const game = () => {
  const number = Math.floor(Math.random()*100) + 1;
  console.log(number);
  userInput = Number(prompt('Введите число от 1 до 100'));  
  while (userInput !== number)
  {
    if (userInput === 0) return;    
    if (userInput < number) alert('Больше!')
    else alert('Меньше!');
    userInput = Number(prompt('Введите число от 1 до 100'));
  }
  alert('Верно!');
}

game();