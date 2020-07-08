//-- створити об'єкт (не меньше 5ти властивостей) який описує
//- собаку
//- людину
//- автомобіль
//- квартиру
//- книгу

let dog = {
    size: 'big',
    breed: 'Saint Bernard',
    age: 1,
    marking: ' red with white',
    temperament: 'friendly'
}
    
let human = {
    sex: 'man',
    name: 'John',
    age: 20,
    habit: 'jogging',
    occupation: 'student'
}    

let car = {
    model:  'ford',
    age: 5,
    color: 'blue',
    maintenance: true,
    owner: 'John'    
}

let apartment = {
    square_m: 70,
    floor: 2,
    owner: 'John',
    mansard: false,
    balcony: true
}

let book = {
    author: 'Peter James',
    title: 'Dead Simple',
    pages: 135,
    owner: 'John',
    condition: 'pre-owned'
    
}
console.log(dog, human, car, apartment, book);

//-- Створити масив та вивести його в консоль:
//- з 5 собак
//- 3 5 людей
//- з 5 автомобілів

let dogs = {
    first: 'Maltese',
    second: 'German Shepherd',
    third: 'Aberdeen terrier',
    forth: 'Pug',
    fifth: 'Labrador'
}

let people = {
    first: 'Mark',
    second: 'Jane',
    third: 'Rick',
    forth: 'Nik',
    fifth: 'Mary'
}

let cars = {
    first: 'toyota',
    second: 'nissan',
    third: 'volga',
    forth: 'suzuki',
    fifth: 'ferrari'
}

console.log(dogs, people, cars);


//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//- будинок
//- водій
//- іграшку
//- стіл
//- сумка

let house = {
    location_: 'London',
    square_m: 300,
    includes: {
        room: 5,
        balcony: 2,
        bathroom: 5,
        kitchen: 1,
        storeroom: 1
    },
    residents: ['Mark', 'James', 'Mary', 'Tom'],
    housekeeper: true,
}      
let driver = {
    name: 'Tom',
    age: 30,
    car: ['citroen', 'mazda'],
    drivingLicense: true,
    family: {
        wife: 'Mary',
        son: 'Jerry',
        daughter: 'Ann'               
    }  
}

let toy = {
    description:  'small bear',
    name: 'Teddy',
    characteristics: {
        material: 'plush fabric',
        color: 'brown',
        height: '80 cm'    
    },
     whoPlaysWith: ['Katy', 'Ann', 'Jerry'],
     wasBougth: 'Kids Store'
}
 
let table = {
    material: 'wood',
    color: 'white',
    dimensions: {
        height: 120,
        width: 80     
    },
    whoUses: ['Mary', 'Tom', 'Jerry'],
    wasBought: 'Ikea'
}

let bag = {
    material: 'leather',
    dimensions: {
        height: 50,
        width: 30,
        lenght: 20    
    },
    pocket: 2,
    whoUses: ['Mary', 'Valery'],
    wasBought: 'Liberty'    
}
  
console.log(house, driver, toy, table, bag);

//Дан массив:
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
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консоль наступне
//- статус Андрія
//- статус Максима
//- ім'я передостаннього об'єкту
//- ім'я третього об'єкта
//- вік Олега
//- вік Олі
//- вік + ім'я 5го об'єкта
//- вік + статус Анни

console.log(users[7].status);
console.log(users[4].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[4].age, users[4].name );
console.log(users[5].age, users[5].status );

