const sum = Number(prompt('Введите сумму дохода:'));

if (sum <= 15000) { console.log(`Налог = ${sum * 0.13}`); }
else if (sum > 50000) { console.log(`Налог = ${15000 * 0.13 + 35000 * 0.2 + (sum - 50000) * 0.3}`); }
else { console.log(`Налог = ${15000 * 0.13 + (sum - 15000) * 0.2}`); }