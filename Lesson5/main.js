// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select


function Tag(title, description, titleOfAttr1, action1, titleOfAttr2, action2) {
    this.title = title;
    this.description = description;
    this.attribute = [{attrTitle: titleOfAttr1, attrAct: action1}, {attrTitle: titleOfAttr2, attrAct: action2}];

}

let a =
     new Tag('a', 'предназначен для создания ссылок',
     'accesskey','активация ссылки комбинацией клавиш',
      'download', ' предлагает скачать указанный по ссылке файл');

let div = 
    new Tag('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'class', 'определяет имя класса, которое позволяет связать тег со стилевым оформлением',
     'id', 'Указывает имя стилевого идентификатора');

let h1 = 
    new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня', 
    'align', 'определяет выравнивание заголовка', 
    'hidden', 'cкрывает содержимое элемента от просмотра');

let span =
    new Tag('span', 'предназначен для определения строчных элементов документа', 
    'class', 'определяет имя класса, которое позволяет связать тег со стилевым оформлением',
     'id', 'Указывает имя стилевого идентификатора');

let input = 
    new Tag('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
    'checked', 'предварительно активированный переключатель или флажок',
    'name', 'имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать')

let form =
    new Tag('form', 'устанавливает форму на веб-странице, предназначен для обмена данными между пользователем и сервером',
    'autocomplete', 'включает автозаполнение полей формы', 'name', 'имя формы');

let option =
    new Tag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', 
    'disabled', 'заблокировать для доступа элемент списка', 
    'selected', 'заранее устанавливает определенный пункт списка выделенным');

let select =
new Tag('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
'required', 'cписок обязателен для выбора перед отправкой формы', 'size', 'количество отображаемых строк списка');


console.log(a, div, h1, span, input, form, option, select);

// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

class Tag_ {
    constructor(title, description, titleOfAttr1, action1, titleOfAttr2, action2) {
        this.title = title;
        this.description = description;
        this.attribute = [{attrTitle: titleOfAttr1, attrAct: action1}, {attrTitle: titleOfAttr2, attrAct: action2}];
    }
}

let a_ = 
    new Tag_('a', 'предназначен для создания ссылок',
    'accesskey','активация ссылки комбинацией клавиш',
    'download', ' предлагает скачать указанный по ссылке файл');

    let div_ = 
    new Tag_('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'class', 'определяет имя класса, которое позволяет связать тег со стилевым оформлением',
     'id', 'Указывает имя стилевого идентификатора');

let h1_ = 
    new Tag_('h1', 'представляет собой наиболее важный заголовок первого уровня', 
    'align', 'определяет выравнивание заголовка', 
    'hidden', 'cкрывает содержимое элемента от просмотра');

let span_ =
    new Tag_('span', 'предназначен для определения строчных элементов документа', 
    'class', 'определяет имя класса, которое позволяет связать тег со стилевым оформлением',
     'id', 'Указывает имя стилевого идентификатора');

let input_ = 
    new Tag_('input', 'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
    'checked', 'предварительно активированный переключатель или флажок',
    'name', 'имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать')

let form_ =
    new Tag_('form', 'устанавливает форму на веб-странице, предназначен для обмена данными между пользователем и сервером',
    'autocomplete', 'включает автозаполнение полей формы', 'name', 'имя формы');

let option_ =
    new Tag_('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', 
    'disabled', 'заблокировать для доступа элемент списка', 
    'selected', 'заранее устанавливает определенный пункт списка выделенным');

let select_ =
new Tag_('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
'required', 'cписок обязателен для выбора перед отправкой формы', 'size', 'количество отображаемых строк списка');


console.log(a_, div_, h1_, span_, input_, form_, option_, select_);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let car = {
    model: 'i5',
    manufacture: 'BMW',
    yearOfManufacture: 2020,
    maxSpeed: 250,
    engineCapacity: 5,
    drive() {
      console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    },
    info() {
        console.log(this);
    },
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear(newValue) {
        this.yearOfManufacture = newValue;
    },
    addDriver(driver) {
        this.driver = driver;
    }
}

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = yearOfManufacture;
    this.speed = maxSpeed;
    this.engine = engineCapacity;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    this.info = function() {
        console.log(this);
    }
    this.increaseMaxSpeed = function(newSpeed) {
        this.speed = newSpeed;
    }
    this.changeYear = function(newValue) {
        this.year = newValue;
    }
    this.addDriver = function(driver) {
        this.driver = driver;
    }
}

let xxx = 
    new Car('xxx', 'BMW', 2020, 250, 5);

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car_ {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = yearOfManufacture;
        this.speed = maxSpeed;
        this.engine = engineCapacity;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    info() {
        console.log(this);
    }
    increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

let x5 = 
    new Car_('x5', 'BMW', 2020, 250, 5);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }
}

let molly = new Cinderella('Molly', 18, 35);
let dolly = new Cinderella('Dolly', 19, 36);
let sally = new Cinderella('Sally', 20, 35);
let sandy = new Cinderella('Sandy', 20, 36);
let sammy = new Cinderella('Sammy', 21, 38);
let kelly = new Cinderella('Kelly', 22, 39);
let tammy = new Cinderella('Tammy', 25, 40);
let emily = new Cinderella('Emily', 28, 37);
let jessy = new Cinderella('Jessy', 27, 36);
let katy = new Cinderella('Katy', 29, 38);

let arrayOfCinderella = [molly, dolly, sally, sandy, sammy, kelly, tammy, emily, jessy, katy];

class Prince {
    constructor(name, age, sizeOfSlipper) {
        this.name = name;
        this.age = age;
        this.sizeOfSlipper = sizeOfSlipper;
    }
}

let he =
    new Prince('Charli', 30, 37);
console.log(he);

let she;
for(let i = 0; i <arrayOfCinderella.length; i++) {
    if(he.sizeOfSlipper === arrayOfCinderella[i].footSize) {        
        she = arrayOfCinderella[i];
    }
}
console.log(she);

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Cinderella_(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let anya = new Cinderella_('Anya', 20, 39);
let katya = new Cinderella_('Katya', 25, 38);
let olya = new Cinderella_('Olya', 28, 39);
let tanya = new Cinderella_('Tanya', 22, 37);
let sonya = new Cinderella_('Sonya', 29, 36);
let zoya = new Cinderella_('Zoya', 23, 40);
let manya = new Cinderella_('Manya', 24, 35);
let nastya = new Cinderella_('Nastya', 26, 38);
let nadya = new Cinderella_('Nadya', 27, 36);
let maya = new Cinderella_('Maya', 24, 34);

let arrayOfCinderella_ = [anya, katya, olya, tanya, sonya, zoya, manya, nastya, nadya, maya];

function Prince_(name, age, sizeOfSlipper) {
    this.name = name;
    this.age = age;
    this.sizeOfSlipper = sizeOfSlipper;
    this.findHer = function(array) {
        let she_ = array.filter(item => item.size === this.sizeOfSlipper);
        return she_;     
    }
}

let he_ = new Prince('Arnold', 35, 40);
console.log(he_)
he_.findHer(arrayOfCinderella_);

