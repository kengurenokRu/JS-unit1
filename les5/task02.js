'use strict'

const myStr = prompt('Введите вашу строку:');

const result = (str) => {
  let strTemp = str;
  strTemp = strTemp.toLowerCase();
  strTemp = strTemp.charAt(0).toUpperCase() + strTemp.slice(1);
  return strTemp
};

console.log(result(myStr));