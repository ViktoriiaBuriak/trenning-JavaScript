// Робітники:
// Створіть об'єкт, що представляє робітника з властивостями, такими як ім'я, посада, зарплата. Додайте кілька робітників у масив.

const employers = [
    { name: 'Jacob', position: 'seller', salary: 1500 },
    { name: 'Ralf', position: 'manager', salary: 2200 },
    { name: 'George', position: 'engeneer', salary: 2500 },
];

for (const employer of employers) {
    console.log(employer);
}


// Пошук інформації:
// Створіть функцію, яка приймає масив робітників та ім'я робітника, і повертає інформацію про цього робітника (посада та зарплата).

function employersArray(employerName) {
    const employers = [
        { name: 'Jacob', position: 'seller', salary: 1500 },
        { name: 'Ralf', position: 'manager', salary: 2200 },
        { name: 'George', position: 'engineer', salary: 2500 },
    ];

    for (const employer of employers) {
        if (employer.name === employerName) {
            return { position: employer.position, salary: employer.salary };
        }
    }
    return 'Sorry, this employee does not work here!'
}

console.log(employersArray('Jacob'));
console.log(employersArray('Ralf'));
console.log(employersArray('Mark'));


// Зміна зарплати:
// Створіть функцію, яка приймає масив робітників та ім'я робітника і збільшує його зарплату на певний відсоток.

function newEmployersArray(employerName) {
    const employers = [
        { name: 'Jacob', position: 'seller', salary: 1500 },
        { name: 'Ralf', position: 'manager', salary: 2200 },
        { name: 'George', position: 'engineer', salary: 2500 },
    ];

    for (const employer of employers) {
        let newSalary = 0;
        if (employer.name === employerName) {
            newSalary = employer.salary * 1.2;
            return { salary: newSalary };
        } 
    }
    return 'Sorry, this employee does not work here!';
}

console.log(newEmployersArray('Jacob'));
console.log(newEmployersArray('Ralf'));
console.log(newEmployersArray('Mark'));


// Сума зарплат:
// Створіть функцію, яка приймає масив робітників та повертає загальну суму їхніх зарплат.

function totalSalary() {
    const employers = [
        { name: 'Jacob', position: 'seller', salary: 1500 },
        { name: 'Ralf', position: 'manager', salary: 2200 },
        { name: 'George', position: 'engineer', salary: 2500 },
    ];

    let sumSalary = 0;

    for (const employer of employers) {    
        sumSalary += employer.salary;
    }
    return sumSalary;
}

console.log(totalSalary());

// // Якщо ви хочете, щоб функція була більш гнучкою і могла приймати будь-який масив,
//  ви можете модифікувати функцію так, щоб вона приймала масив як аргумент

function totalSalary2(employees) {
    let sumSalary = 0;

    for (const employee of employees) {    
        sumSalary += employee.salary;
    }
    return sumSalary;
}

const myEmployers = [
    { name: 'Jacob', position: 'seller', salary: 1500 },
    { name: 'Ralf', position: 'manager', salary: 2200 },
    { name: 'George', position: 'engineer', salary: 2500 },
];

const anotherEmployers = [
    { name: 'Alice', position: 'developer', salary: 2000 },
    { name: 'Bob', position: 'designer', salary: 1800 },
];

console.log(totalSalary2(myEmployers)); // Виведе суму зарплат для myEmployers
console.log(totalSalary2(anotherEmployers)); // Виведе суму зарплат для anotherEmployers


// Додавання нового робітника:
// Створіть функцію, яка приймає масив робітників та нового робітника (об'єкт) і додає його до масиву.




// Видалення робітника:
// Створіть функцію, яка приймає масив робітників та ім'я робітника і видаляє його з масиву.




// Зміна посади:
// Створіть функцію, яка приймає масив робітників, ім'я робітника та нову посаду, і змінює посаду відповідного робітника.




// Фільтрація за зарплатою:
// // Створіть функцію, яка приймає масив робітників та мінімальну зарплату і повертає новий масив, включаючи тільки робітників з зарплатою,
//  більшою або рівною заданому мінімуму.




// Задача: Робота з об'єктами
// Створіть об'єкт, що представляє студента з властивостями name, age, та courses (масив предметів, які він вивчає).

// Додайте новий предмет до масиву courses та виведіть оновлений об'єкт у консоль.





// Задача: Робота з масивами
// Створіть масив чисел. Використайте метод filter, щоб створити новий масив, що містить лише парні числа.

// Використайте метод map, щоб створити новий масив, в якому кожне число буде підняте до квадрату.





// Задача: Змішування об'єктів та масивів
// Створіть масив об'єктів, кожний з яких представляє книгу з властивостями title, author та year.

// Використайте метод filter, щоб створити новий масив, що містить лише книги, випущені в останні 5 років.

