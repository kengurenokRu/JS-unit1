const getAverageValue = (allСashbox ) => {
    let avg = 0;
    for (const cashbox of allСashbox) 
        avg += cashbox;
    return Math.floor(avg / allСashbox.length);
}

console.log(getAverageValue([4500, 3210, 650, 1250, 7830, 990, 13900, 370]));