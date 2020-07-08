//-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//- отримує текст з параграфа з id "content"
//- отримує текст з блоку з id "rules"
//- замініть текст параграфа з id 'content' на будь-який інший
//- замініть текст параграфа з id 'rules' на будь-який інший
//- змініть кожному елементу колір фону на червоний
//- змініть кожному елементу колір тексту на синій
//- отримати весь список класів елемента з id=rules і вивести їх в console.log
//- отримати всі елементи з класом fc_rules
//- поміняти колір тексту у всіх елементів fc_rules на червоний

let content = document.getElementById('content');
console.log(content.innerText);

let rules = document.getElementById('rules');
console.log(rules.innerText);

content.innerText = 'New text is here';

rules.innerText = 'Information is expected soon';

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

content.style.color = 'blue';
rules.style.color = 'blue';

console.log(rules.classList);

let fc_rules = document.getElementsByClassName('fc_rules');
for (let item of fc_rules) {
    console.log(item);
    item.style.color = 'red';
}
