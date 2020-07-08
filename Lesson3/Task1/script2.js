//Взяти файл template_2.html та працювати в ньому
//- Напишіть код, який :
//-- змінює колір тексту елементу з ід main_header на будь-який інший
//-- робить ширину елементу ul 400 пікселів
//-- робить ширину всіх елементів з класом linkList шириною 50%
//-- отримує текст який зберігається в елементі з класом listElement2
//-- отримує всі елементи li та змінює ім колір фону на сірий
//-- отримує всі елементи 'a' та додає їм клас anchor
//-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//-- отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
//-- отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
//-- отримати елементи p та змінити їм padding на довільне значення
//-- отримати елементи з класом text2 та змінити їм текст на довільне значення

let main_header = document.getElementById('main_header');
main_header.style.color = 'violet';

let ul = document.getElementsByTagName ('ul');
for(i = 0; i < ul.length; i++) {
    ul[i].style.width = '400px';
}

let linkList = document.getElementsByClassName('linkList');
for(let item of linkList) {
    item.style.width = '50%';
}

let listElement2 = document.getElementsByClassName('listElement2');
for(let item of listElement2) {
    console.log(item.innerText);
}

let listOfli = document.getElementsByTagName('li');
for(let item of listOfli) {
    item.style.backgroundColor = 'gray';
}

let listOfa = document.getElementsByTagName('a');
for(let item of listOfa) {
    item.classList.add('anchor');
}

for(let i = 0; i < listOfa.length; i++) {
     if(listOfa[i].innerText == 'link3') {
         listOfa[i].style.fontSize = '40px';
     }
}

for(let item of listOfa) {
    item.classList.add(`element_${item.innerText}`);
}

let subHeader = document.getElementsByClassName('sub-header');
for(let item of subHeader) {
    item.style.backgroundColor = prompt('Enter a new background color, please');
}

for(let i = 0; i < subHeader.length; i++) {
    if(subHeader[i].innerText == 'content 2 segment') {
        subHeader[i].style.color = prompt('Enter a new  color, please');
    }
} 

let content_1 = document.getElementsByClassName('content_1');
for (let item of content_1) {
    item.innerText = prompt('Enter a new text, please');    
}

let listOfp = document.getElementsByTagName('p');
for(let item of listOfp) {
    item.style.padding = '35px';
}

let text2 = document.getElementsByClassName('text2');
for(let item of text2) {
    item.innerText = 'New Information';
}
