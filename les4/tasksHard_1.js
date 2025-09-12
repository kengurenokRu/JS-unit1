const sum = Number(prompt('Введите сумму дохода:'));

if (sum < 15000) { console.log(`Налог = ${sum * 0.13}`); }
  else if (sum > 50000) { console.log(`Налог = ${sum * 0.3}`); }
    else { console.log(`Налог = ${sum * 0.2}`); }