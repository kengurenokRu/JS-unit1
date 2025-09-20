const randomInterval = (count, n, m) => {
  return Array(count).fill().map((item, i) => {
    if (n < m)
      return Math.floor(Math.random() * (m - n + 1)) + n;
    else
      return Math.floor(Math.random() * (n - m + 1)) + m;
  }
  )
}

console.log(randomInterval(10, 5, 2));