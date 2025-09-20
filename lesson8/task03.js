const randomIntervalParity = (count, n, m, parity) => {
  return Array(count).fill().map((item, i) => {
    let min;
    let max;
    if (n < m) {
      min = n;
      max = m;
    }
    else {
      min = m;
      max = n;
    }
    let even;
    while ((even = Math.floor(Math.random() * (max - min + 1)) + min)) {
      if ((parity === 'even') && (even % 2 === 0))
        return even;
      else if ((parity === 'odd') && (even % 2 !== 0))
        return even;
    }
  }
  )
}

console.log(randomIntervalParity(10, 5, 2, 'odd'));