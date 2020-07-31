// - Создать произвольный елемент с id = text. 
//  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let textElement = document.querySelector('#text');
let textButton = document.querySelector('#text-btn');
textButton.onclick = () => {
    textElement.style.display = 'none';
}

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn = document.createElement('button');
document.body.appendChild(btn);
btn.textContent = 'press here to hide the button';
btn.onclick = () => {
    btn.style.display = 'none';
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageInput = document.querySelector('#age');
let ageButton = document.querySelector('#age-submit');

ageButton.onclick = () => {
    (ageInput.value < 18) ? alert('You are less than 18!') : '';
}

//- Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.querySelector('#menu');
let h1 = document.querySelector('h1');
h1.onclick = () => {
    menu.classList.toggle('hidden');
}

// - Создать список комментариев , пример объекта комментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentArray = [
    {title : 'firstComment', body:'information for the first comment'},
    {title : 'secondComment', body:'information for the second comment'},
    {title : 'thirdComment', body:'information for the third comment'}
];
for(let comment of commentArray) {
    let commentDiv = document.createElement('div');
    commentDiv.innerText = `${comment.body}`;
    let commentBtn = document.createElement('button');
    commentBtn.innerText = `${comment.title}`;
    document.body.appendChild(commentDiv);
    document.body.appendChild(commentBtn);
    commentBtn.addEventListener('click', () => {
    commentDiv.classList.toggle('hidden');
}); 
}
// створити 2 форми  по 2 інпути в кожній. 
// створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'BUTTON';

let form1 = document.forms.form1;
let input1 = form1.check;
let form2 = document.forms.form2;
let input2 = form2.radio;

button.onclick = () => {
    console.log(input1);
    console.log(input2);    
}

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кількіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

function createTable (trNum, tdNum, id) {
    let table = document.createElement('table');
    id.appendChild(table);
    for(let i = 0; i < trNum; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);    
    for(let j = 0; j < tdNum; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }}
};

createTable(2, 3, container);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let form = document.forms.form;
let trInput = form.tr;
let tdInput = form.td;
let valueInput = form.value;
let d = document.getElementById('submit');
console.log(d);
d.onclick = () => {
    let table1 = document.createElement('table');
 
    for(let i = 0; i < 4; i++) {
        let tr1 = document.createElement('tr');
        table1.appendChild(tr1);
    }
    for(let j = 0; j < 6; j++) {
        let td1 = document.createElement('td');
        tr1.appendChild(td1);
    
    }
    document.body.appendChild(table1);
}




// - Сворити масив нецензурних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let arrayofBadWords = ['damn', 'jerk', 'shit', 'bullshit', 'nerd', 'prat', 'noob', 'shitbox'];
let textInput = document.querySelector('#text9');
console.log(textInput);
let textBtn = document.querySelector('#text-submit');
console.log(textBtn);

textBtn.onclick = () => {
    for(let badWord of arrayofBadWords) {
        (textInput.value === badWord) ? alert('Do not use bad words!') : '';
    }
}

//Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//Кинути алерт з попередженням у випадку якщо містить.
//Перевірку робити при натисканні на кнопку
textBtn.onclick = () => {
    for(let badWord of arrayofBadWords) {
         textInput.value.includes(badWord) ? alert('Stop using bad words!') : '';
    }    
}
