const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = (names, prefix) => {
    const newNames = names.map(number => { return prefix + ' ' + number });
    return newNames;
}


console.log(addPrefix(names, 'Mr'));