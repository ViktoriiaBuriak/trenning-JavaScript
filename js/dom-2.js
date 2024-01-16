// Створення елементів і додавання їх до DOM:

// Створіть новий елемент (наприклад, <div> або <button>).
// Додайте текст або інші властивості до цього елемента.
// Додайте цей елемент до DOM, наприклад, до тіла сторінки.

const createDiv = document.createElement('div');
createDiv.classList.add('test-container');
createDiv.textContent = 'Hello World !';
createDiv.style.color = 'pink';

const bodyElement = document.body;

bodyElement.appendChild(createDiv);





// Зміна властивостей елементів:

// Знайдіть елемент за ідентифікатором або класом.
// Змініть його текстовий вміст, колір шрифту або інші властивості.

const element = document.querySelector('.paragraf');
element.style.color = 'blue';
element.style.fontSize = '20px';
element.textContent = 'Hello customer !'




// Обробка подій:

// Додайте обробник подій (наприклад, клік або наведення) до кнопки чи іншого елемента.
// При спрацьовуванні події виведіть повідомлення в консоль чи змініть яку-небудь властивість іншого елемента.

function handleClickEvent() {
    const createButton = document.createElement('button');
    createButton.classList.add('test-button');
    createButton.textContent = 'Click me'

    const bodyElement = document.body;

    bodyElement.appendChild(createButton); 

    createButton.addEventListener('click', clickButton);
} 


function clickButton() {
    alert('Hello customer !');
}

handleClickEvent();






// Використання делегування подій:

// Створіть список елементів, кожен з яких може спричинити подію.
// Використовуйте делегування подій, щоб обробити події на батьківському елементі замість кожного окремого дочірнього елемента.

const elementContainer = document.querySelector('.button-container');

elementContainer.addEventListener('click', eventDelegation);

function eventDelegation(event) {
if(!event.target.classList.contains('button')){
    return;
}
const clickedButton = event.target;

clickedButton.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
    console.log('Button clicked!')
}


// Взаємодія з формами:

// Створіть форму з текстовим полем та кнопкою.
// Додайте обробник подій для події відправлення форми.
// Виведіть введені дані з текстового поля в консоль чи змініть властивість іншого елемента.




// Анімація з використанням подій:

// Створіть елемент, який можна анімувати, наприклад, за допомогою CSS-класів.
// Додайте обробник подій (наприклад, клік) для спрацювання анімації.