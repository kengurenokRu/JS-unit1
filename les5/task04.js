'use strict'

const sum = (sumOrder, count, promo) => {
  let tempSumOrder = sumOrder;
  if (count > 10) {
    tempSumOrder *= 0.97;
  }
  if (tempSumOrder > 30000) {
    tempSumOrder = 30000 + (tempSumOrder - 30000) * 0.85;
  }
  if (promo.toUpperCase() === 'METHED') {
    tempSumOrder *= 0.9;
  }
  if ((promo.toUpperCase() === 'G3H2Z1') && (tempSumOrder > 2000)) {
    tempSumOrder -= 500;
  }
  return tempSumOrder;
}

console.log(sum(5000, 8, 'METHED'));
console.log(sum(70000, 12, 'METHED'));
console.log(sum(70000, 12, 'G3H2Z1'));
console.log(sum(2000, 2, 'G3H2Z1'));