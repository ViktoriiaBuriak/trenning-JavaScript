// Задача: Сума чисел
// Напишіть функцію, яка приймає число n і обчислює суму всіх цілих чисел від 1 до n.

function sumOfNumber(n) {
    let totalSum = 0;
    for (let i = 0; i <= n; i++){
        totalSum += i;
    }
    return totalSum;
}

console.log(sumOfNumber(5));

// Задача: Парні числа
// Напишіть функцію, яка приймає число n і виводить всі парні числа від 1 до n.

function evenNumbers(n) {
    let totalNumber = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            totalNumber += i;
        }
    }
        return totalNumber;
    
}
console.log(evenNumbers(10));



// Задача: Таблиця множення
// Напишіть функцію, яка створює таблицю множення для заданого числа n. Наприклад, якщо n дорівнює 5, то виведіть таблицю множення для 5x1, 5x2, ..., 5x10.

function calculator(n) {
    let totalCalculator = [];
    for (let i = 1; i <= 10; i++) {
        let result = i * n;
        totalCalculator.push(result);
    }
    return totalCalculator;
}

console.log(calculator(5));

// Задача: Пошук найменшого елемента
// Напишіть функцію, яка приймає масив чисел і знаходить найменший елемент в цьому масиві.

function numberElements(arr) {
    let minElement = arr[0];
    for (let i = 1; i >= arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
        
    }
return minElement;
}

console.log(numberElements([2, 8, 5, 3]));

// Задача: Перевірка на простоту
// Напишіть функцію, яка приймає число і перевіряє, чи воно є простим.

function isPrime(number) {
    if (number <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true;
}

console.log(isPrime(5));
console.log(isPrime(8));