'use strict'

{
    const productName = "LG 2589 36''";
    const count = 12;
    const category = 'Телевизор';
    const cost = 1359.21;

    console.log(`Товар ${productName} на сумму ${count * cost} руб`);
}

{
    const productName = "Минская марка 25%";
    const count = 46;
    const category = 'Сметана';
    const cost = 3.09;

    console.log(`Товар ${productName} на сумму ${count * cost} руб`);
}

{
    const productName = prompt('Введите наименование товара');
    const count = Number(prompt('Введите количество товара'));
    const category = prompt('Введите категорию товара');
    const cost = Number(prompt('Введите стоимость товара'));

    console.log(typeof productName);
    console.log(typeof count);
    console.log(typeof category);
    console.log(typeof cost);
    console.log(`На складе ${count} единицы товара "${productName}" на сумму ${count * cost} деревянных`);
}