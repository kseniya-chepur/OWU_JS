//--Завантажити з мережі будь-який шаблон сайту (index_MedLab.html)
//Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//- знайти всі елементі, які мають class
let listOfClass = document.querySelectorAll('[class]');
for (let item of listOfClass) {
    console.log(item);
}

//- знайти всі параграфи ,та змінити текст на hello oktenweb!
let listOfP = document.getElementsByTagName('p');
for (let item of listOfP) {
    item.innerText = 'hello oktenweb';
}

//- знайти всі div та змінити ім колір на червоний
let listOfDiv = document.getElementsByTagName('div');
for (let item of listOfDiv) {
    item.style.color = 'red';
}
