// создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let array = [2, 4, 7, 1, 9, 15, 3, 30, 12, 17, 5, 77, 33, 90, 13, 16, 22, 28, 0, 10];

array.sort((a, b) => {
    return a - b;
});
console.log(array);

array.sort((a, b) => {
    return b - a;
});
console.log(array);

// -- при помощи filter получить числа кратные 3
let filteredArray = array.filter(value => value % 3 == 0);
console.log(filteredArray);

// -- при помощи filter получить числа кратные 10
let filteredArray_ = array.filter(value => value % 10 == 0);
console.log(filteredArray_);

//-- перебрать (проитерировать) массив при помощи foreach()
array.forEach(item => console.log(item));

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let mapArray = array.map(value => value * 3);
// console.log(mapArray);

// - создать массив со словами на 15-20 элементов.
// - отсортировать его по алфавиту в восходящем порядке.
let wordsArray = ['book', 'laptop', 'tablet', 'computer', 'mouse', 'software', 'program', 'device', 'key', 'system', 'user', 'password', 'login', 'admin', 'browser'];
wordsArray.sort((a, b) => (a > b) ? 1 : -1);
console.log(wordsArray);

//-- отсортировать его по алфавиту  в нисходящем порядке.
wordsArray.sort((a, b) => (a < b) ? 1 : -1);
console.log(wordsArray);

//-- отфильтровать слова длиной менее 4х символов
let filteredArr = wordsArray.filter(word => word.length < 4);
console.log(filteredArr);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapArr = wordsArray.map(value => value + '!');
console.log(mapArr);

//Все робити через функції масивів (foreach, map ...тд)

let users = [ 
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true}, 
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false}, 
    {name: 'max', age: 31, status: true} 
];
//- відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((a, b) => {
    return a.age - b.age;
});
console.log(users);

users.sort((a, b) => {
    return b.age - a.age;
});
console.log(users);

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
users.sort((a, b) => (a.name > b.name) ? 1 : -1);
console.log(users);

users.sort((a, b) => (a.name < b.name) ? 1 : -1);
console.log(users);

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), 
//та зберегти це в новий масив (первинний масив залишиться без змін)
let usersWithId = users.map((users, id) => {
    let result = Object.assign({}, users);
    result.id = id + 1;
    return result;
});
console.log(usersWithId);
console.log(users);

//- відсортувати його за індентифікатором
usersWithId.sort((a, b) => a.id - b.id);
console.log(usersWithId);

//-- написать функцию калькулятора с 2мя числами и колбеком
function calculator(a, b, callback) {
    console.log(callback(a, b));
};
calculator(2, 4, (a, b) => a * b);

//-- наисать функцию калькулятора с 3мя числами и колбеком
function calculator_(a, b, c, callback) {
    console.log(callback(a, b, c));
}
calculator_(2, 4, 3, (a, b, c) => (a + b) ** c);

let cars = [ 
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
];
//Відфільтрувати масив за наступними крітеріями :
//- двигун більше 3х літрів
let carsFilterByVolume = cars.filter((car) => car.volume >= 3);
console.log(carsFilterByVolume);

//- двигун = 2л
let carsFilterByVolume2l = cars.filter((car) => car.volume === 2);
console.log(carsFilterByVolume2l);

//- виробник мерс
let carsFilterByProducer = cars.filter((car) => car.producer === 'mercedes');
console.log(carsFilterByProducer);

//- двигун більше 3х літрів + виробник мерседес
let carsFilterByVolAndProducer = cars.filter((car) => car.volume >= 3 && car.producer === 'mercedes');
console.log(carsFilterByVolAndProducer);

//- двигун більше 3х літрів + виробник субару
let carsFilterByVolAndProducer_ = cars.filter((car) => car.volume >= 3 && car.producer === 'subaru');
console.log(carsFilterByVolAndProducer_);

//- сили більше ніж 300
let carsFilterByPower = cars.filter((car) => car.power >= 300);
console.log(carsFilterByPower);

//- сили більше ніж 300 + виробник субару
let carsFilterByPowerAndProducer = cars.filter((car) => car.power >= 300 && car.producer === 'subaru');
console.log(carsFilterByPowerAndProducer);

//- мотор серіі ej
let carsFilterByEngine = cars.filter((car) => car.engine.includes('ej'));
console.log(carsFilterByEngine);

//- сили більше ніж 300 + виробник субару + мотор серіі ej
let carsFilterByPowerAndEngineAndProducer = cars.filter((car) => car.power >= 300 && car.producer === 'subaru' && car.engine.includes('ej'));
console.log(carsFilterByPowerAndEngineAndProducer);

//- двигун меньше 3х літрів + виробник мерседес
let carsFilterByVolumeAndProducer = cars.filter((car) => car.volume < 3 && car.producer === 'mercedes');
console.log(carsFilterByVolumeAndProducer);

//- двигун більше 2л + сили більше 250
let carsFilterByVolumeAndPower = cars.filter((car) => car.volume >= 2 && car.power >= 250);
console.log(carsFilterByVolumeAndPower);

//- сили більше 250  + виробник бмв
let carsFilterByPowerAndProducer_ = cars.filter((car) => car.power >= 250 && car.producer === 'bmw');
console.log(carsFilterByPowerAndProducer_);

//- взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];
// //-- отсортировать его по id пользователей
usersWithAddress.sort((a, b) => a.id - b.id);
console.log(usersWithAddress);

//-- отсортировать его по id пользователей в обратном опрядке
usersWithAddress.sort((a, b) => b.id - a.id);
console.log(usersWithAddress);


//-- отсортировать его по возрасту пользователей
usersWithAddress.sort((a, b) => a.age - b.age);
console.log(usersWithAddress);

// //-- отсортировать его по возрасту пользователей в обратном порядке
usersWithAddress.sort((a, b) => b.age - a.age);
console.log(usersWithAddress);

// //-- отсортировать его по имени пользователей
usersWithAddress.sort((a, b) => (a.name > b. name) ? 1 : -1);
console.log(usersWithAddress);

// //-- отсортировать его по имени пользователей в обратном порядке
usersWithAddress.sort((a, b) => (a.name < b. name) ? 1 : -1);
console.log(usersWithAddress);

// //-- отсортировать его по названию улицы  в алфавитном порядке
usersWithAddress.sort((a, b) => (a.address.street > b.address.street) ? 1 : -1);
console.log(usersWithAddress);

// //-- отсортировать его по номеру дома по возрастанию
usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(usersWithAddress);

// //-- отфильтровать (оставить) тех кто младше 30
let filterByAge = usersWithAddress.filter((user) => user.age < 30);
console.log(filterByAge);

// //-- отфильтровать (оставить) тех у кого отрицательный статус
let filterByStatus = usersWithAddress.filter((user) => user.status === false);
console.log(filterByStatus);

// //-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 
let filterByAgeAndStatus = usersWithAddress.filter((user) => user.age < 30 && user.status === false);
console.log(filterByAgeAndStatus);

// //-- отфильтровать (оставить) тех у кого номер дома четный
let filterByNum = usersWithAddress.filter((user) => user.address.number % 2 === 0);
console.log(filterByNum);

// Створити об'єкт автомобіля з полями:
// Марка автомобіля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути об'єкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

class Car{
    constructor(model, power, name, age, drivingExperience, price, year) {
        this.model = model;
        this.power = power;
        this.driver = {name: name, age: age, drivingExperience: drivingExperience};
        this.price = price;
        this.year = year;
    }
};

let toyota = new Car('camry', 250, 'Tom', 35, 15, 35000, 2019);
let nissan = new Car('leaf', 150, 'Ron', 27, 3, 40000, 2018);
let volkswagen = new Car('golf', 270, 'Sam', 37, 12, 20000, 2017);
let renault = new Car('clio', 180, 'Jack', 23, 2, 17000, 2014);
let hyundai = new Car('accent', 130, 'John', 26, 7, 12000, 2015);
let opel = new Car('corsa', 200, 'Tim', 29, 11, 16000, 2018);
let kia = new Car('rio', 140, 'Bob', 24, 2, 15000, 2019);
let seat = new Car('leon', 260, 'Mick', 27, 9, 21000, 2020);

let carsArray = [toyota, nissan, volkswagen, renault, hyundai, opel, kia, seat];

//Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//на відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//Для початку вкладіть всі наші створені автомобілі в масив cars.
//Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
let newDrivers = [
    {name: 'Alex', age: 30, drivingExperience: 12},
    {name: 'Matt', age: 33, drivingExperience: 15},
    {name: 'Larry', age: 38, drivingExperience: 20},
    {name: 'Nick', age: 26, drivingExperience: 4}   
];

for(let i = 0; i < carsArray.length; i += 2) {
    carsArray[i].power *= 1.1;
    carsArray[i].price *= 1.05;       
    carsArray[i].driver = newDrivers[i/2];
}
console.log(carsArray);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
for(let i = 0; i < carsArray.length; i++) {
    if (carsArray[i].driver.drivingExperience < 5 && carsArray[i].driver.age > 25) {
        console.log(`${carsArray[i].driver.name} go to refresher courses!`);
        carsArray[i].driver.drivingExperience += 1;
    }
}
console.log(carsArray);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let sum = 0;
for(let i = 0; i < carsArray.length; i++) {
    sum += carsArray[i].price;
}
console.log(sum);

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function findIndex(array, num) {
    let minIndex = array.indexOf(num);
    let maxIndex = array.lastIndexOf(num);
    console.log(`minIndex is ${minIndex}`);
    console.log(`maxIndex is ${maxIndex}`);
}
findIndex(arr, 7);





