'use strict';


const rectangle = {
  _width: 5,
  _height: 5,
  set height(h) {
    if (typeof h === 'number') {
      this._height = h;
    }
  },
  set width(w) {
    if (typeof w === 'number') {
      this._width = w;
    }
  },
  get p() {
    return `${this._width * 2 + this._height * 2} см`;
  },
  get s() {
    return `${this._width * this._height} см2`;
  },
};

console.log(rectangle.p);
console.log(rectangle.s);

rectangle.width = '10';
rectangle.height = '10';

console.log(rectangle.p);
console.log(rectangle.s);

rectangle.width = 10;
rectangle.height = 10;

console.log(rectangle.p);
console.log(rectangle.s);
