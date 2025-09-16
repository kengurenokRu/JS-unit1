const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (allСashbox) =>{
    let avg = 0;
    for (cashbox of allСashbox)
        avg += cashbox[1] / cashbox[0];
    return (avg / allСashbox.length).toFixed(2);
}

console.log(getAveragePriceGoods(allСashbox));