//const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
//const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (allStudents, failedStudents) => {
    return allStudents.filter((students) => !failedStudents.includes(students));
}

console.log(filter(['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'], ['Сидоров', 'Смирнов', 'Попов']));