const random = (count) => {
  return Array(count).fill().map((item, i) => Math.floor(Math.random() * 100)+1);
}

console.log(random(100));