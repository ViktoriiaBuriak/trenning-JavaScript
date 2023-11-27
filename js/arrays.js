// Сума елементів масиву:
// Створіть функцію, яка приймає масив чисел і повертає їхню суму.

function sumOfNumber(numbers) {
    let totalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
     totalSum += numbers[i];
       
    }
     return totalSum;
}

console.log(sumOfNumber([5, 2, 3]))


// Найменший елемент:
// Створіть функцію, яка приймає масив чисел і повертає найменший елемент.

function minElements(numbers) {
    if (numbers.length === 0) {
        return undefined; // додаємо на випадок якщо масив буде порожнім, в іншому випадку отримаємо Infinity
    }
    const minNumber = Math.min(...numbers);
    return minNumber;
}

console.log(minElements([2, 3, 4, 5]))



// Фільтрація чисел:
// Створіть функцію, яка приймає масив чисел і фільтрує його, залишаючи лише парні числа.

function evenNumbers(numbers) {
    let result = [];
    for (let number of numbers){
        if (number % 2 === 0) {
            result.push(number);
        }
    }
    return result;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]))




// Злиття масивів:
// Створіть функцію, яка приймає два масиви і повертає новий масив, який складається з елементів обох масивів.

function arr(firstArr, secondArr) {
   const thirdArr = [...firstArr, ...secondArr];
    return thirdArr;
}

console.log(arr([1, 2, 3], [4, 5, 6]))

// Середнє значення:
// Створіть функцію, яка приймає масив чисел і повертає середнє значення (сума всіх елементів поділена на їхню кількість).




// Найбільший за абсолютною величиною:
// Створіть функцію, яка приймає масив чисел і повертає найбільший елемент за абсолютною величиною.




// Вилучення дублікатів:
// Створіть функцію, яка приймає масив і повертає новий масив без дублікатів.




// Сортування масиву:
// Створіть функцію для сортування масиву чисел у зростаючому порядку.