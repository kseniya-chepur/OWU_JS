//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
//(Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let man = {
    name: 'Tom',
    age: 25,
    status: true
}
let child = {
    mother: 'Mary',
    father: 'John',
    pet: false
}
let family = {
    husband: 'Bob',
    wife: 'Emily',
    house: true
}
let dog = {
    breed: 'beagle',
    nickname: 'Zigi',
    size: 'medium'
}
let dish = {
    taste: 'spicy',
    ingredients: 'vegetables',
    recipe: 'Asian'
}
//- создать 5 объектов с полностью разным набором полей. 
//В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let music = {
    style: ['jazz', 'rock', 'pop', 'country'],
    famousSinger: {
        who: 'Louis Armstrong',
        wasBorn: 1901,
        from: 'USA',
        instrument: 'tp'
    }
}
let food = {
    cuisine: ['French', 'Asian', 'Italian'],
    dish: {
        mainIngredient: 'fish',
        howCooked: 'baked',
        whoCooked: 'Mom'
    }
}
let film = {
    styles: ['horror', 'thriller', 'documentary', 'comedy'],
    famousFilm: {
        title: 'Rear window',
        directedBy: 'Alfred Hitchcock',
        when: 1954,
        starring: ['Grace Kelly', 'James Stewart']
    },
    filmFestival: ['Cannes', 'Berlin', 'Venice']
}
let book = {
    bookTitle: 'The Lincoln Lawyer',
    heros: ['Mickey Haller', 'Margaret McPherson', 'Louis Ross Roulet'],
    about: {
        author: 'Michael Connelly',
        genre: 'crime fiction',
        language: 'English',
        publishedIn: 2005
    }
}
let sport = {
    competion: 'Olympic Games',
    disciplines: ['athletic', 'box', 'swimming'],
    famousSportman: {
        name: 'Pelé',
        occupation: 'football player',
        nationality: 'Brazilian'
    }
}
//- При помощи for in вывести все ключи всех объектов из задания 1 и 2
for(let keys in man) {
    console.log(keys);
}
for(let keys in child) {
    console.log(keys);
}
for(let keys in family) {
    console.log(keys);
}
for(let keys in dog) {
    console.log(keys);
}
for(let keys in dish) {
    console.log(keys);
}
for(let keys in music) {
    console.log(keys);
}
for(let keys in music.famousSinger) {
    console.log(keys);
}
for(let keys in food) {
    console.log(keys);
}
for(let keys in food.dish) {
    console.log(keys);
}
for(let keys in film) {
    console.log(keys);
}
for(let keys in film.famousFilm) {
    console.log(keys);
}
for(let keys in book) {
    console.log(keys);
}
for(let keys in book.about) {
    console.log(keys);
}
for(let keys in sport) {
    console.log(keys);
}
for(let keys in sport.famousSportman) {
    console.log(keys);
}
//- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(man));
console.log(Object.keys(child));
console.log(Object.keys(family));
console.log(Object.keys(dog));
console.log(Object.keys(dish));
console.log(Object.keys(music));
console.log(Object.keys(music.famousSinger));
console.log(Object.keys(food));
console.log(Object.keys(food.dish));
console.log(Object.keys(film));
console.log(Object.keys(film.famousFilm));
console.log(Object.keys(book));
console.log(Object.keys(book.about));
console.log(Object.keys(sport));
console.log(Object.keys(sport.famousSportman));
//- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars =
     [{model: 'volvo', year: 2002, power: 140, color: 'blue'},
     {model: 'opel', year: 2019, power: 150, color: 'while'},
     {model: 'mazda', year: 2017, power: 165, color: 'red'},
     {model: 'citroen', year: 2019, power: 140, color: 'black'},
     {model: 'audi', year: 2015, power: 160, color: 'blue'},
     {model: 'nissan', year: 2000, power: 130, color: 'green'},
     {model: 'toyota', year: 2020, power: 170, color: 'black'},
     {model: 'kia', year: 2014, power: 155, color: 'orange'},
     {model: 'hyundai', year: 2018, power: 167, color: 'silver'},
     {model: 'bentli', year: 2013, power: 300, color: 'yellow'}];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = 
    [{name: 'London', population: '9 mio', country: 'Great Britain', region: 'Greater London'},
    {name: 'Tokio', population: '8 mio', country: 'Japan', region: 'Kanto'},
    {name: 'Barcelona', population: '5 mio', country: 'Spain', region: 'Catalonia'}];
    
//- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars1 =
     [{model: 'BMW', year: 2019, power: 177, color: 'blue', 
     driver: {name: 'Bob', age: 25, gender: 'man', drivingExperience: 5}},
     {model: 'honda', year: 2016, power: 155, color: 'red', 
     driver: {name: 'Nancy', age: 29, gender: 'woman', drivingExperience: 7}},
     {model: 'ford', year: 2009, power: 135, color: 'silver',
     driver: {name: 'Jack', age: 40, gender: 'man', drivingExperience: 20}}];

//- проитерировать каждый массив из задания 5,6,7 при помощи while.

let i = 0;
while(i < cars.length) {
    console.log(cars[i]);
    i++;
}
let j = 0;
while(j < cities.length) {
    console.log(cities[j]);
    j++;
}
let k = 0;
while (k < cars1.length) {
    console.log(cars1[k]);
    k++;
}

//- проитерировать каждый массив из задания 5,6,7 при помощи for.
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for(let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
for(let i = 0; i < cars1.length; i++) {
    console.log(cars1[i]);
}

//- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for(let car of cars) {
    console.log(car);
}
for(let city of cities) {
    console.log(city);
}
for(let car of cars1) {
    console.log(car);
}

//- взять объекты из задания 1 и превратить каждый в json.
let stringifyMan = JSON.stringify(man);
let stringifyChild = JSON.stringify(child);
let stringifyFamily = JSON.stringify(family);
let stringifyDog = JSON.stringify(dog);
let stringifyDish = JSON.stringify(dish);

//- взять json из задания 11 и превратить их обратно в объекты.
let parseMan = JSON.parse(stringifyMan);
let parseChild = JSON.parse(stringifyChild);
let parseFamily = JSON.parse(stringifyFamily);
let parseDog = JSON.parse(stringifyDog);
let parseDish = JSON.parse(stringifyDish);

//- взять массив из задания 5, в цикле перебрать его объекты превратив их в json.
for(let car of cars) {
    let stringifyCars = JSON.stringify(car);
    console.log(stringifyCars);
}

//- взять массив из задания 6, в цикле перебрать его объекты превратив их в json.
for(let city of cities) {
    let stringifyCities = JSON.stringify(city);
    console.log(stringifyCities);
}

//- взять массив из задания 7, в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

let arr = [];
for(let i = 0; i < cars1.length; i++) {
    let stringifyCars1 = JSON.stringify(cars1[i]);
    arr.push(stringifyCars1);
}
console.log(arr);

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let users1 = 
    [{name: 'Rick', age: 20, skills: ['JS, Java']},
    {name: 'Arno', age: 23, skills: ['C++', 'Python']},
    {name: 'Sam', age: 30, skills: ['JS', 'Rubi']}];

for(let user of users1) {
    console.log(user);
    for(let skill of user.skills) {
        console.log(skill);
    }
}

//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
//Скопировать все skills всех пользователей в отедльный массив

let users2 = 
    [{name: 'Jane', age: 25, skills: ['painting', 'skiing']},
    {name: 'Tom', age: 28, skills: ['hiking', 'parachuting']},
    {name: 'Kelli', age: 32, skills: ['skating', 'swimming']}];

let skillArr = [];
for(let user of users2) {
    console.log(user);
    for(let skill of user.skills) {
        console.log(skill);
        skillArr.push(skill);
    }
}
console.log(skillArr);

//- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
 let users = 
    [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
    {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
    {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];

for(let user of users) {
    console.log(user);
   for(let skill of user.skills) {
        console.log(skill);
    }
}
//- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let userS = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let addressArr = [];
for(let user of userS) {
    addressArr.push(user.address);
}        
console.log(addressArr);

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свiй блок за допомоги document.createElement. Всі дані в одному блоці.

for(let user of userS) {
    let createdDiv = document.createElement('div');
        createdDiv.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`;
        document.body.appendChild(createdDiv);
        
}

// //- За допомоги циклу проітерувати  масив users, записати кожного юзера в свiй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for(let user of userS) {
    let outerDiv = document.createElement('div');    
    let nameDiv = document.createElement('div');
    nameDiv.innerText = user.name;
    outerDiv.appendChild(nameDiv);
    let ageDiv = document.createElement('div');
    ageDiv.innerText = user.age;
    outerDiv.appendChild(ageDiv);
    let statusDiv = document.createElement('div');
    statusDiv.innerText = user.status;
    let addressDiv = document.createElement('div');
    addressDiv.innerText = user.address.city + ' ' + user.address.country + ' ' +  user.address.street + ' ' + user.address.houseNumber;
    outerDiv.appendChild(addressDiv);
    outerDiv.appendChild(statusDiv);
    document.body.appendChild(outerDiv);
}

//- За допомоги циклу проітерувати  масив users, записати кожного юзера в свiй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості
for(let user of userS) {
    let outerDiv = document.createElement('div');    
    let nameDiv = document.createElement('div');
    nameDiv.innerText = user.name;
    outerDiv.appendChild(nameDiv);
    let ageDiv = document.createElement('div');
    ageDiv.innerText = user.age;
    outerDiv.appendChild(ageDiv);
    let statusDiv = document.createElement('div');
    statusDiv.innerText = user.status;
    outerDiv.appendChild(statusDiv);
    let addressDiv = document.createElement('div');
    let cityDiv = document.createElement('div');
    cityDiv.innerText = user.address.city;
    addressDiv.appendChild(cityDiv);
    let countryDiv = document.createElement('div');
    countryDiv.innerText = user.address.country;
    addressDiv.appendChild(countryDiv);
    let streetDiv = document.createElement('div');
    streetDiv.innerText = user.address.street;
    addressDiv.appendChild(streetDiv);
    let houseDiv = document.createElement('div');
    houseDiv.innerText = user.address.houseNumber;
    addressDiv.appendChild(houseDiv);      
    outerDiv.appendChild(addressDiv);    
    document.body.appendChild(outerDiv);
}
//- Дано 2 масиви з рівною кількістю об'єктів.         
//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false}, 
    {id: 2, name: 'petya', age: 30, status: true}, 
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'}, 
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
    {user_id: 2, country: 'Poland', city: 'Krakow'}, 
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j]
        }
    }
}
console.log(usersWithId);

//Cтворити розмітці блок з id, class та текстом в середені. 
//Зчитати окремо цей текст з селекторів по id , class та тегу

let newDiv = document.createElement('div');
newDiv.id = 'new';
newDiv.classList.add('new');
newDiv.innerText = 'new text';
document.body.appendChild(newDiv);

let byId = document.getElementById('new');
console.log(byId);
let byClass = document.getElementsByClassName('new');
console.log(byClass[0]);
let byTag = document.getElementsByTagName('div');
for (let item of byTag) {
    if (item.innerText === 'new text') {
        console.log(item);
    }
}
//- змінити цей текст використовуючи селектори id, class,  tag

byId.innerText = 'changed by id';
console.log(byId);
byClass[0].innerText = 'changed by class';
for (let item of byTag) {
    if (item.innerText === 'changed by class') {
        item.innerText = 'changed by tag';
    }
}

//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
byId.style.width = '200px';
byId.style.height = '200px';
byClass[0].style.width = '100px';
byClass[0].style.height = '100px';
for (let item of byTag) {
    if (item.innerText === 'changed by tag') {
        item.style.width = '50px';
        item.style.height = '50px';    
    }
}

//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
let table = document.createElement('table');
document.body.appendChild(table);
let tr = document.createElement('tr');
table.appendChild(tr);
for (let i = 0; i < 3; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
}

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
let table1 = document.createElement('table');
document.body.appendChild(table1);
for (let i = 0; i < 10; i++) {
    let tr1 = document.createElement('tr');
    table1.appendChild(tr1);
    for (let j = 0; j < 3; j++) {
        let td1 = document.createElement('td');
        tr1.appendChild(td1);
    }
}
//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let table2 = document.createElement('table');
document.body.appendChild(table2);
for (let i = 0; i < 10; i++) {
    let tr2 = document.createElement('tr');
    table2.appendChild(tr2);
    for (let j = 0; j < 5; j++) {
        let td2 = document.createElement('td');
        tr2.appendChild(td2);
    }
}

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
let table3 = document.createElement('table');
document.body.appendChild(table3);
let n = +prompt('Please enter n');
let m = +prompt('Please enter m');
for (let i = 0; i < n; i++) {
    let tr3 = document.createElement('tr');
    table3.appendChild(tr3);
    for (let j = 0; j < m; j++) {
        let td3 = document.createElement('td');
        tr3.appendChild(td3);
    }
}

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить  кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

for (let item of rules) {
    let block = document.createElement('div');
    let title = document.createElement('h2');
    let rule = document.createElement('p');
    document.body.appendChild(block);
    block.appendChild(title);
    block.appendChild(rule);
    title.innerText = item.title;
    rule.innerText = item.body;
}
