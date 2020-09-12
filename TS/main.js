// Клас людина:
//   поля:
//     вага,зріст
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Human;
}());
// Клас депутат(наслідується від людини):
//   поля:
//   прізвище,ім'я,вік,хабарник?,розмір хабаря
//   методи:
// дати хабаря(зробити відповідні перевірки, якщо депутат не хабарник то щоб він відмовився, або ж якщо сума хабаря надто велика то щоб він вагався чи брати чи ні)
var Deputy = /** @class */ (function (_super) {
    __extends(Deputy, _super);
    function Deputy(weight, height, id, surname, name, age, briber, bribe) {
        var _this = _super.call(this, weight, height) || this;
        _this.id = id;
        _this.surname = surname;
        _this.name = name;
        _this.age = age;
        _this.briber = briber;
        _this.bribe = bribe;
        return _this;
    }
    Deputy.prototype.giveBribe = function () {
        if (!this.briber) {
            console.log('I"m not taking bribes!');
        }
        else if (this.bribe > 100000) {
            console.log('Let me think');
        }
        else {
            console.log('He took money!');
        }
    };
    return Deputy;
}(Human));
var deputy1 = new Deputy(90, 180, 12345, 'Vasyn', 'Vasya', 45, true, 5000);
var deputy2 = new Deputy(95, 185, 23456, 'Petrenko', 'Mykola', 50, false);
var deputy3 = new Deputy(78, 175, 34567, 'Kozlov', 'Venya', 35, true, 20000);
var deputy4 = new Deputy(105, 195, 45678, 'Sidorenko', 'Petya', 40, true, 10000);
var deputy5 = new Deputy(60, 165, 56789, 'Kostenko', 'Nadiya', 29, false);
var deputy6 = new Deputy(70, 180, 67890, 'Ivanov', 'Ivan', 33, false);
var deputy7 = new Deputy(65, 175, 78901, 'Broshkina', 'Alica', 42, true, 3000);
// Клас фракція
//   поля:
//     список депутатів
//   методи:
//     додати депутата (вводимо з клави)
//     видалити депутата(теж з клави)
//     видалити всіх негідників які брали хабаря
//     вивести найбільшого хабарника
//     вивести всіх депутатів
//     видалити всіх депутатів
//     вивести загальну суму хабарів для фракції
var Fraction = /** @class */ (function () {
    function Fraction(title) {
        this.title = title;
        this.listOfDeputies = [];
    }
    Fraction.prototype.addDeputy = function (deputy) {
        this.listOfDeputies.push(deputy);
    };
    Fraction.prototype.removeDeputy = function (deputy) {
        this.listOfDeputies = this.listOfDeputies.filter(function (value) { return value.id != deputy.id; });
    };
    Fraction.prototype.removeBribers = function () {
        for (var i = 0; i < this.listOfDeputies.length; i++) {
            if (this.listOfDeputies[i].bribe) {
                delete this.listOfDeputies[i];
            }
        }
    };
    Fraction.prototype.showBiggestBriber = function () {
        var maxBribe = 0;
        var biggestBriber = {};
        for (var i = 0; i < this.listOfDeputies.length; i++) {
            if (this.listOfDeputies[i].bribe > maxBribe) {
                maxBribe = this.listOfDeputies[i].bribe;
                biggestBriber = this.listOfDeputies[i];
            }
        }
        console.log(maxBribe, biggestBriber);
        return biggestBriber;
    };
    Fraction.prototype.showAllDeputies = function () {
        this.listOfDeputies.forEach(function (deputy) {
            return console.log(deputy);
        });
    };
    Fraction.prototype.removeAllDeputies = function () {
        this.listOfDeputies.length = 0;
    };
    Fraction.prototype.showTotalBribe = function () {
        var totalBribe = 0;
        for (var _i = 0, _a = this.listOfDeputies; _i < _a.length; _i++) {
            var deputy = _a[_i];
            if (deputy.bribe > 0) {
                totalBribe += deputy.bribe;
            }
        }
        console.log(totalBribe);
        return totalBribe;
    };
    return Fraction;
}());
var fraction1 = new Fraction('Yellow');
fraction1.addDeputy(deputy1);
fraction1.addDeputy(deputy2);
fraction1.addDeputy(deputy3);
fraction1.addDeputy(deputy4);
var fraction2 = new Fraction('Green');
fraction2.addDeputy(deputy5);
fraction2.addDeputy(deputy6);
fraction1.showBiggestBriber();
fraction1.showTotalBribe();
// клас Верховна рада
//   поля:
//     мапа фракцій
//   методи:
//     додати\видалити фракцію
//     вивести всі фракції
//     вивести конкретну фракцію
//     додати\видалити депутата з фракції
//     вивести всіх хабарників фракції
//     вивести найбільшого хабарника у фракції
//     вивести найбільшого хабарника верховної ради
//     вивести всіх депутатів фракції
//     вивести найбільшого хабарника фракції
var VerkhovnaRada = /** @class */ (function () {
    function VerkhovnaRada() {
        this.listofFractions = [];
    }
    VerkhovnaRada.prototype.addFraction = function (fraction) {
        this.listofFractions.push(fraction);
    };
    VerkhovnaRada.prototype.removeFraction = function (fraction) {
        this.listofFractions = this.listofFractions.filter(function (value) { return value.title != fraction.title; });
    };
    VerkhovnaRada.prototype.showAllFractions = function () {
        this.listofFractions.forEach(function (fraction) {
            return console.log(fraction);
        });
    };
    VerkhovnaRada.prototype.showFraction = function (fraction) {
        for (var _i = 0, _a = this.listofFractions; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === fraction.title) {
                console.log(item);
            }
        }
    };
    VerkhovnaRada.prototype.addDeputy = function (deputy, fraction) {
        for (var _i = 0, _a = this.listofFractions; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === fraction.title) {
                item.listOfDeputies.push(deputy);
            }
        }
    };
    VerkhovnaRada.prototype.removeDeputy = function (deputy) {
        for (var _i = 0, _a = this.listofFractions; _i < _a.length; _i++) {
            var item = _a[_i];
            item.listOfDeputies = item.listOfDeputies.filter(function (value) { return value.id != deputy.id; });
        }
    };
    VerkhovnaRada.prototype.showAllBribers = function () {
        for (var _i = 0, _a = this.listofFractions; _i < _a.length; _i++) {
            var item = _a[_i];
            var listOfBribers = item.listOfDeputies.filter(function (value) { return value.briber; });
            console.log(listOfBribers);
        }
    };
    VerkhovnaRada.prototype.showBiggestBriberInFraction = function () {
        for (var _i = 0, _a = this.listofFractions; _i < _a.length; _i++) {
            var item = _a[_i];
            item.showBiggestBriber();
        }
    };
    VerkhovnaRada.prototype.showBiggestBriber = function () {
        var maxBribe = 0;
        var biggestBriber = {};
        for (var _i = 0, _a = this.listofFractions; _i < _a.length; _i++) {
            var item = _a[_i];
            item.listOfDeputies.forEach(function (value) {
                if (value.bribe > maxBribe) {
                    maxBribe = value.bribe;
                    biggestBriber = value;
                }
            });
            console.log(maxBribe, biggestBriber);
        }
    };
    VerkhovnaRada.prototype.showAllDeputies = function () {
        for (var _i = 0, _a = this.listofFractions; _i < _a.length; _i++) {
            var item = _a[_i];
            item.showAllDeputies();
        }
    };
    return VerkhovnaRada;
}());
var verkhovnaRada = new VerkhovnaRada();
verkhovnaRada.addFraction(fraction1);
verkhovnaRada.addFraction(fraction2);
verkhovnaRada.showAllFractions();
verkhovnaRada.addDeputy(deputy7, fraction2);
verkhovnaRada.showAllBribers();
verkhovnaRada.showBiggestBriberInFraction();
verkhovnaRada.showAllDeputies();
