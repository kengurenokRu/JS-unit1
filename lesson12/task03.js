'use strict';

const akkerman = (m, n) => {
  if (m === 0) return n + 1;
  else if (n === 0) return akkerman(m - 1, 1);
  else return akkerman(m - 1, akkerman(m, n - 1));
};

console.log(akkerman(1, 4));
