'use strict'
{
    const productName = prompt('Введите наименование товара');
    const count = Number(prompt('Введите количество товара'));
    const category = prompt('Введите категорию товара');
    const cost = Number(prompt('Введите стоимость товара'));
    if (isNaN(count) || isNaN(cost)) {
        console.log('Вы ввели некорректные данные');
    }
    else {
        console.log(typeof productName);
        console.log(typeof count);
        console.log(typeof category);
        console.log(typeof cost);
        console.log(`На складе ${count} единицы товара "${productName}" на сумму ${count * cost} деревянных`);
    }
}