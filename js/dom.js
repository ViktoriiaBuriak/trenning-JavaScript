// Робота з DOM

// Створіть функцію, яка приймає ідентифікатор елемента та змінює його текст на "Hello, World!".

function updateTextById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = 'Hello, World!';
    } else {
        console.error('Element with id ' + id + ' not found.');
    }
}

updateTextById('hello');

//  Змініть колір тексту елемента:
// Створіть функцію, яка приймає ідентифікатор елемента та новий колір, і змінює колір тексту цього елемента.

function changeTextColor(id, color) {
    const element = document.getElementById(id);
    if (element) {
        element.style.color = color;
        console.log(`Text color of element with id '${id}' changed to '${color}'.`);
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
}

changeTextColor('hello', 'red');



// Змініть розмір шрифту:
// Напишіть функцію, яка приймає ідентифікатор елемента та новий розмір шрифту, і змінює розмір шрифту тексту цього елемента.

function changeFontSize(id, fontSize) {
    const element = document.getElementById(id);
    if(element) {
        element.style.fontSize = fontSize;
        console.log(`Text size of element with id '${id}' changed to '${fontSize}'.`)
    } else {
        console.log(`Element with id '${id}' not found.`)
    }
}

changeFontSize ('hello', '20px');


//  Додайте клас до елемента:
// Створіть функцію, яка приймає ідентифікатор елемента та ім'я класу, і додає цей клас до класів елемента.

function addNewClass(id, newClass) {
    const element = document.getElementById(id);
    if(element) {
        element.classList.add(newClass);
        console.log(`Added ${newClass} successfully`)
    } else {
        console.log(`Element with id '${id}' not found.`)
    }
}

addNewClass('name', 'title');


//  Видаліть елемент:
// Напишіть функцію, яка приймає ідентифікатор елемента та видаляє цей елемент з DOM.

function deleteElement(id) {
    const element = document.getElementById(id);
    if(element) {
        element.remove();
        console.log(`Element ${id} delete successfully`)
    } else {
        console.error(`Element with id '${id}' not found.`)
    }

}

deleteElement('name');



//  Змініть властивість елемента:
// Створіть функцію, яка приймає ідентифікатор елемента, назву властивості та нове значення, і змінює цю властивість у вказаному елементі.

function changeProperty(id, property, newName) {
    const element = document.getElementById(id);
    if(element) {
        element[property] = newName;
        console.log(`Property ${property} for element with id ${id} changed successfully`)
    } else {
        console.error(`Element with id '${id}' not found.`) 
    }
}

changeProperty('name','title','heading');



// Зміна стилів:

// Створіть функцію, яка змінює стиль тексту (колір, розмір шрифту, жирність і т.д.) вказаного елемента.

function newStyleText(id, fontStyle, newFontStyle) {
    const element = document.getElementById(id);
    if(element) {
        for (let i = 0; i < fontStyle.length; i++) {
            element.style[fontStyle[i]] = newFontStyle[i];
        }
        console.log(`FontStyle ${fontStyle.join(', ')} for element with id ${id} changed successfully`);
    } else {
        console.error(`Element with id '${id}' not found.`) 
    }
}

newStyleText('color-style', ['color', 'font-size'], ['blue', '24px']);


//  Додавання та видалення класів:

// Напишіть функцію, яка додає клас до елемента, якщо його немає, і видаляє, якщо він вже є.

function addRemoveClass(id, className) {
    const element = document.getElementById(id);
    if(element){
        if (element.classList.contains(className)) {
            element.classList.remove(className);
            console.log(`Class '${className}' removed successfully.`);
        } else {
            element.classList.add(className);
            console.log(`Class '${className}' added successfully.`);
        }
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
}

addRemoveClass('class', 'title');


//  Зміна атрибутів:

// Створіть функцію, яка змінює значення вказаного атрибуту елемента.

function setAttribute(id, attributeName, newAttributeValue) {
    const element = document.getElementById(id);
    if(element) {
        element.setAttribute(attributeName, newAttributeValue);
        console.log('Value of attribute changed successfully');
    } else {
        console.error(`Element with id '${id}' not found.`);
    }

}

setAttribute('exampleElement', 'class', 'sunshine');


//  Додавання нового елемента:

// Напишіть функцію, яка додає новий елемент (наприклад, <p>) з вказаним текстом вказаному батьківському елементу.

function addNewElement(id, newElementTag, newText) {
    const element = document.getElementById(id);
    if (element) {
        const newElement = document.createElement(newElementTag);
        newElement.textContent = newText;
        element.appendChild(newElement);
        console.log(`New element <${newElementTag}> with text '${newText}' for id '${id}' added successfully.`);
    }  else {
        console.error(`Element with id '${id}' not found.`); 
    }
}

addNewElement('class', 'p', 'Welcome');


//  Отримання та виведення інформації:

// Створіть функцію, яка отримує та виводить інформацію про розміри та положення вказаного елемента.




//  Видалення всіх дочірніх елементів:

// Напишіть функцію, яка видаляє всі дочірні елементи вказаного елемента.




//  Робота з подіями:

// Створіть функцію, яка призначає обробник подій для вказаного елемента, який викликається при кліці на елементі і змінює його текст або стилі.


