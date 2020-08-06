// - Создать произвольный елемент с id = text. 
//  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let textElement = document.querySelector('#text');
let textButton = document.querySelector('#text-btn');
textButton.onclick = () => {
    textElement.style.display = 'none';
}

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn = document.createElement('button');
let block1 = document.getElementsByClassName('block')[0];
block1.appendChild(btn);
btn.textContent = 'press here to hide the button';
btn.onclick = () => {
    btn.style.display = 'none';    
}

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageInput = document.querySelector('#age');
let ageButton = document.querySelector('#age-submit');

ageButton.onclick = (e) => {
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
// Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentArray = [
    {title : 'firstComment', body:'information for the first comment'},
    {title : 'secondComment', body:'information for the second comment'},
    {title : 'thirdComment', body:'information for the third comment'}
];

let block2 = document.getElementsByClassName('block')[1];
for(let comment of commentArray) {
    let commentDiv = document.createElement('div');
    commentDiv.innerText = `${comment.body}`;    
    let commentBtn = document.createElement('button');
    commentBtn.innerText = `${comment.title}`;
    block2.appendChild(commentDiv);
    block2.appendChild(commentBtn);    
    commentBtn.addEventListener('click', () => {
    commentDiv.classList.toggle('hidden');
}); 
}
// створити 2 форми  по 2 інпути в кожній. 
// створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let button = document.createElement('button');
let block3 = document.getElementsByClassName('block')[2];

let form1 = document.forms.form1;
let input1 = form1.check;
let form2 = document.forms.form2;
let input2 = form2.radio;

block3.appendChild(button);
button.innerText = 'BUTTON';

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
let newBtn = document.getElementById('submit');

newBtn.onclick = (e) => {    
    e.preventDefault();
    let table = document.createElement('table');
    container1.appendChild(table);
        for(let i = 0; i < trInput.value; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
        for(let j = 0; j < tdInput.value; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);    
            td.innerText = valueInput.value; 
        }}
    };

// - Сворити масив нецензурних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let arrayofBadWords = ['damn', 'jerk', 'shit', 'bullshit', 'nerd', 'prat', 'noob', 'shitbox'];
let textForm = document.forms.textform;
let textInput = textForm.text;
let textBtn = textForm.submit;

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

//-- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (оставляет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersForm = document.forms.users;
let firstCheck = usersForm.check1;
let secondCheck = usersForm.check2;
let thirdCheck = usersForm.check3;
let block = document.getElementsByClassName('block')[3];

for(let user of usersWithAddress) {
    let div = document.createElement('div');
    div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
    block.appendChild(div);
}

firstCheck.onclick = () => {
    block.innerText = '';
    if(firstCheck.checked) {
        for (let user of usersWithAddress) {
            if(!user.status) {
                let div = document.createElement('div');
                div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
                block.appendChild(div);
            }
        } 
    } else {
        for(let user of usersWithAddress) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
            block.appendChild(div);
        }
    }
}

secondCheck.onclick = () => {
    block.innerText = '';
    if(secondCheck.checked) {
        for(let user of usersWithAddress) {
            if(user.age >= 29)  {
                let div = document.createElement('div');
                div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
                block.appendChild(div);
            }
        }
    } else {
        for(let user of usersWithAddress) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
            block.appendChild(div);
        }
    }
}

thirdCheck.onclick = () => {
    block.innerText = '';
    if(thirdCheck.checked) {
        for(let user of usersWithAddress) {
            if(user.address.city === 'Kyiv') {
                let div = document.createElement('div');
                div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
                block.appendChild(div);
            }
        }
    } else {
        for(let user of usersWithAddress) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.street} ${user.address.number}`;
            block.appendChild(div);
        }
    }
}

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let arrOfImages = [
    {id: 1, url: 'https://www.weathernationtv.com/app/uploads/2019/06/summer.jpg'},
    {id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-VJwUXgRt5sfHvt1FWJOCpGE0xhWbHn3FEw&usqp=CAU'},
    {id: 3, url: 'https://www.medihelp.ro/public/posts/0/198/sfaturi-vara-sanatoasa.jpg'},
    {id: 4, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'},
    {id: 5, url: 'https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/summer-sunset.jpg?itok=MAwMYC0o'}
];

let img = document.createElement('img');
let leftButton = document.createElement('button');
leftButton.innerText = 'left';
let rightButton = document.createElement('button');
rightButton.innerText = 'right';
let block4 = document.getElementsByClassName('block')[4];
block4.appendChild(img);
img.width = '500';
let id = 0;
img.src = arrOfImages[id].url;
block4.appendChild(leftButton);
block4.appendChild(rightButton);

leftButton.onclick = () => {
    if(id - 1 < 0) {
        id = arrOfImages.length - 1;
    } else {
        id -= 1;
    }
    img.src = arrOfImages[id].url;
}

rightButton.onclick = () => {
    if(id + 1 > arrOfImages.length - 1) {
        id = 0;
    } else {
        id += 1;
    }
    img.src = arrOfImages[id].url;
}

