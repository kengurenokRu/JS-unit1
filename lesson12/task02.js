'use strict';

const array = [];

const fillArray = (arr) => {
  arr.push(Math.floor(Math.random() * 12));

  if (arr.reduce((acc, item) => acc + item) < 50) {
    return fillArray(arr);
  } else {
    return arr;
  };
};

console.log(fillArray(array));

