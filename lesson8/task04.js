const intercalaryYear = (n, m) => {  
  const yearArr = [];
    let startYear;
    let endYear;
    if (n < m) {
      startYear = n;
      endYear = m;
    }
    else {
      startYear = m;
      endYear = n;
    }
    const isIntercalaryYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };
    for (let year = startYear; year <= endYear; year++) {
      if (isIntercalaryYear(year)) {
        yearArr.push(year);
      }
    }
  return yearArr;
}

console.log(intercalaryYear(1999, 2025));