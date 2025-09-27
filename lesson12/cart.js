'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  add(name, cost, count = 1) {
    this.items.push({name, cost, count});
    this.increaseCount(count);
  },

  increaseCount(count) {
    this.count += count;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) =>
      acc += item.count * item.cost * (1 - this.discount / 100.00), 0)
      .toFixed(2);
  },

  clear() {
    this.items.length = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Товаров в корзине: ${this.count} на сумму ${this.totalPrice}`);
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode.toUpperCase() === 'METHED') {
      this.discount = 15;
    } else if (promocode.toUpperCase() === 'NEWYEAR') {
      this.discount = 21;
    }
  },
};

Object.defineProperty(cart, 'totalProce', {

});

cart.add('Телевизор LG', 2315.6);
cart.add('Кронштейн для телевизора', 235.4);
cart.add('Батарейки АА', 2.35, 6);
cart.print();

cart.add('Батарейки ААА', 2, 4);
cart.print();

cart.setDiscount = 'NEWYEAR';
cart.print();

cart.clear();
cart.print();
