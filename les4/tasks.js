'use strict'

const rain = Math.round(Math.random());

if (rain) { console.log('Пошёл дождь. Возьмите зонт!'); }
else { console.log('Дождя нет!'); }

const ex1 = Number(prompt('Введите кол-во баллов по математике:'));
const ex2 = Number(prompt('Введите кол-во баллов по русскому языку:'));
const ex3 = Number(prompt('Введите кол-во баллов по информатике:'));
if (ex1 + ex2 + ex3 >= 265) { console.log('Поздравляю, вы поступили на бюджет!'); }
else { console.log('Сожалеем, вы не поступили на бюджет!'); }

const sum = Number(prompt('Введите сумму для снятия:'));
if (sum % 100 === 0) { console.log('Сумма выдана!'); }
else { console.log('Сожалеем, деньги выдать невозможно'); }
