//- створити функцію яка виводить масив

function showArray(array) {
    console.log(array);
}
showArray([1, 3, 5]);

//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
function createArray() {
    let arr = [];
    for(let i = 0; i < 10; i++) {
        arr[i] = Math.random();
    }       
    showArray(arr);
}
createArray();

//- створити функцію яка приймає три числа та виводить та повертає найменьше.
function findMin(a, b, c) {
    let min = Math.min(a, b,c);
    return min;
}
findMin(4, 6, 1);

 //створити функцію яка приймає три числа та виводить та повертає найбільше.
function findMax(a, b, c) {
    let max = Math.max(a, b, c);
    return max;  
}
  findMax(5, 65, 90);
 
 //- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function findMinMax(arr) {
   let min = arr[0];
   let max = arr[0];
   for(let i = 0; i < arr.length; i++) {
       if(arr[i] < min){
           min = arr[i];
       }
       if(arr[i] > max) {
           max = arr[i];
       }
   }
   console.log(max);
   return min;
}
findMinMax([5, 6, 3, 7, 8, 2, 4]);

//- створити функцію яка повертає найбільше число з масиву
function findMaxArray(arr) {
    let a = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > a) {
            a = arr[i];
        }
    }   
    return a;
}
findMaxArray([3, 4, 45, 0, 9]);

// створити функцію яка повертає найменьше число з масиву
function findMinArray(arr) {
    let a = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < a) {
            a = arr[i];
        }
    }
     return a;
}
findMinArray([24, 6, -8, 3, 9, 10, 15]);

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
   }
    return sum;
}
findSum([3, 4, 3, 10]);

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function findAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];     
    }
    let average = sum / arr.length;
    return average;
}
findAverage([3, 4, 3, 8, 2]);

//- Створити функцію яка приймає масив будь-яких об'єктів, та повертає значення кількості об'єктів в масиві
function findArrayLength(arr) {
    return arr.length;
}
findArrayLength([{name: 'Bob', age: 10}, {name: 'Nick', age: 15}, {name: 'Tom', age: 25}]);

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальнy кількість полів в них
function findPolesNum(arr) {
    let x = 0;
    for(let item of arr) {
       for(let field in item) {
           x++;       
       }     
    }
    
    return x;
}
findPolesNum([{name: 'Bob', age: 10}, { age: 15}, {name: 'Tom', age: 25}]);

//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
let a = [1, 2, 3, 4]; 
let b = [2, 3, 4, 5];

function findSumByIndex(a, b) {
    let ab = [];
    for (let i = 0; i < a.length; i++) {
        ab[i] = a[i] + b[i];
    }
    return ab;    
}
findSumByIndex(a, b);
  
  //- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  
function changeArray(arr, i) {
    for(let j = 0; j < arr.length; j++) {
    arr[i] = arr[i + 1];
    }
    return arr;
}
changeArray(a, 2);

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
//Довжина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]

function findZeroIndex(arr) {
    let arrNew = [];
    for(i = arr.length - 1; i >= 0; i--){
        if(arr[i] != 0) {
        arrNew.unshift(arr[i]);
        } else {
        arrNew.push(arr[i]);
        }
    }
    return arrNew;
}

findZeroIndex([0,1,2,3,4]);

//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"

function addHelloOwu() {
    let block = document.createElement('div');
    block.innerText = 'Hello owu';
    document.body.appendChild(block);
}
addHelloOwu();

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function addText(arguments) {
    let p = document.createElement('p');
    p.innerText = arguments;
    document.body.appendChild(p);
}
addText('hi');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемeнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в одному блоці

let cars =[
     {model: 'volvo', year: 2002, power: 140, color: 'blue'},
     {model: 'opel', year: 2019, power: 150, color: 'while'},
     {model: 'mazda', year: 2017, power: 165, color: 'red'},
     {model: 'citroen', year: 2019, power: 140, color: 'black'},
     {model: 'audi', year: 2015, power: 160, color: 'blue'},
     {model: 'nissan', year: 2000, power: 130, color: 'green'},
     {model: 'toyota', year: 2020, power: 170, color: 'black'},
     {model: 'kia', year: 2014, power: 155, color: 'orange'},
     {model: 'hyundai', year: 2018, power: 167, color: 'silver'},
     {model: 'bentli', year: 2013, power: 300, color: 'yellow'}];
     
function сreateBlockForCar (arr, id) {
    for(let car of cars) {
        let block = document.createElement('div');
        block.innerText = `${car.model} ${car.power} ${car.color}`;
        document.getElementById(id).appendChild(block);
    }
}
сreateBlockForCar(cars, 'car-parking');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок

function сreateBlockForCar1 (arr, id) {
    for(let car of cars) {
        let outerBlock = document.createElement('div');
        for(let item in car) {
            let innerBlock = document.createElement('div');
            innerBlock.innerText = car[item];
            outerBlock.appendChild(innerBlock);
        }        
        document.getElementById(id).appendChild(outerBlock);
    }
}
сreateBlockForCar1(cars, 'car-parking');

//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true}, 
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}];
           
let citiesWithId = [
{user_id: 3, country: 'USA', city: 'Portland'}, 
{user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
{user_id: 2, country: 'Poland', city: 'Krakow'}, 
{user_id: 4, country: 'USA', city: 'Miami'}];

function joinArrays(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i].id === array2[j].user_id) {
                array1[i].address = array2[j];
            }
        }
    }
    return array1;
}

let result = joinArrays(usersWithId, citiesWithId);
console.log(result);

// ***- беремо завдання з правилами з уроку №3:
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

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

function createRule(arguments) {
    for(let rule of rules) {
        let outerDiv = document.createElement('div');
        document.body.appendChild(outerDiv);
        let title = document.createElement('h');
        title.innerText = `${rule.title}`;
        outerDiv.appendChild(title);
        let body = document.createElement('p');                
        body.innerText = `${rule.body}`;                
        outerDiv.appendChild(body);
    }
}
createRule(rules);
