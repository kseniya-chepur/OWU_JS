//- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let listOfh2 = document.getElementsByTagName('h2');
let nav = document.createElement('ul');
content.appendChild(nav);

for (let item of listOfh2) {
    let li = document.createElement('li');
    li.innerText = `${item.innerText}`;
    nav.appendChild(li);
}

