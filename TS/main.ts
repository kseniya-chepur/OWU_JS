// Клас людина:
//   поля:
//     вага,зріст

class Human {
    weight: number;
    height: number;
    constructor(weight: number, height: number ) {
        this.weight = weight;
        this.height = height;
    }
}

// Клас депутат(наслідується від людини):
//   поля:
//   прізвище,ім'я,вік,хабарник?,розмір хабаря
//   методи:
// дати хабаря(зробити відповідні перевірки, якщо депутат не хабарник то щоб він відмовився, або ж якщо сума хабаря надто велика то щоб він вагався чи брати чи ні)

class Deputy extends Human {
    id: number;
    surname: string;
    name: string;
    age: number;
    briber: boolean;
    bribe?: number;
    constructor(weight: number, height: number, id: number, surname: string, name: string, age: number, briber: boolean, bribe?: number) {
        super(weight, height)
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.briber = briber;
        this.bribe = bribe;
    }    
    giveBribe() {
        if(!this.briber) {
            console.log('I"m not taking bribes!');
        } else if(this.bribe > 100000) {
            console.log('Let me think');
        } else {
            console.log('He took money!');
        }
    }        
}

const deputy1 = new Deputy(90, 180, 12345,'Vasyn', 'Vasya', 45, true, 5000);
const deputy2 = new Deputy(95, 185, 23456,'Petrenko', 'Mykola', 50, false);
const deputy3 = new Deputy(78, 175, 34567, 'Kozlov', 'Venya', 35, true, 20000);
const deputy4 = new Deputy(105, 195, 45678, 'Sidorenko', 'Petya', 40, true, 10000);
const deputy5 = new Deputy(60, 165, 56789, 'Kostenko', 'Nadiya', 29, false);
const deputy6 = new Deputy(70, 180, 67890, 'Ivanov', 'Ivan', 33, false);
const deputy7 = new Deputy(65, 175, 78901, 'Broshkina', 'Alica', 42, true, 3000);


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

class Fraction {
    title: string;
    listOfDeputies: Deputy[];
    constructor(title: string) {
        this.title = title;
        this.listOfDeputies = []; 
    }
    addDeputy(deputy:Deputy):void {    
        this.listOfDeputies.push(deputy);
    }
    removeDeputy(deputy:Deputy):void {
        this.listOfDeputies = this.listOfDeputies.filter(value => value.id != deputy.id);
    }
    removeBribers():void {
        for(let i = 0; i < this.listOfDeputies.length; i++) {
            if(this.listOfDeputies[i].bribe) {
                delete this.listOfDeputies[i];
            }
        }   
    } 
    showBiggestBriber():{} { 
        let maxBribe = 0;
        let biggestBriber = {};
        for(let i = 0; i < this.listOfDeputies.length; i++) {
            if(this.listOfDeputies[i].bribe > maxBribe) {
               maxBribe = this.listOfDeputies[i].bribe;
               biggestBriber = this.listOfDeputies[i];               
           }
       }
       console.log(maxBribe, biggestBriber);
       return biggestBriber;
    }
 
    showAllDeputies():void {
        this.listOfDeputies.forEach(deputy => 
            console.log(deputy));
    }
    removeAllDeputies():void {
        this.listOfDeputies.length = 0;
    }
    showTotalBribe():number {
        let totalBribe = 0;
        for(let deputy of this.listOfDeputies) {
            if(deputy.bribe > 0) {
                totalBribe += deputy.bribe;
            }
        }
            console.log(totalBribe);
            return totalBribe;          
    }
}

const fraction1 = new Fraction('Yellow')
fraction1.addDeputy(deputy1)
fraction1.addDeputy(deputy2)
fraction1.addDeputy(deputy3)
fraction1.addDeputy(deputy4)
const fraction2 = new Fraction('Green')
fraction2.addDeputy(deputy5)
fraction2.addDeputy(deputy6)
fraction1.showBiggestBriber()
fraction1.showTotalBribe()


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

class VerkhovnaRada {
    listofFractions:Fraction[];
    constructor() {
        this.listofFractions = [];
    }

    addFraction(fraction:Fraction):void {
        this.listofFractions.push(fraction);
    }
    removeFraction(fraction:Fraction):void {
        this.listofFractions = this.listofFractions.filter(value => value.title != fraction.title)
    }
    showAllFractions():void {
        this.listofFractions.forEach(fraction =>
            console.log(fraction))
    }
    showFraction(fraction:Fraction):void {
        for(let item of this.listofFractions) {
            if(item.title === fraction.title) {
                console.log(item);
            }
        }
    }
    addDeputy(deputy:Deputy, fraction:Fraction):void {
        for(let item of this.listofFractions) {
            if(item.title === fraction.title) {
                item.listOfDeputies.push(deputy);          
            }
        }
    }
    removeDeputy(deputy:Deputy):void {
        for(let item of this.listofFractions) {
            item.listOfDeputies = item.listOfDeputies.filter(value => value.id != deputy.id) 
        }          
    }
    showAllBribers():void {
        for(let item of this.listofFractions) {
            let listOfBribers = item.listOfDeputies.filter(value => value.briber)
            console.log(listOfBribers);
        }
    }
    showBiggestBriberInFraction():void {
        for(let item of this.listofFractions) {
            item.showBiggestBriber();
        }
    }
    showBiggestBriber():void {
        let maxBribe = 0;
        let biggestBriber = {};
        for(let item of this.listofFractions) {
            item.listOfDeputies.forEach(value => {
                if(value.bribe > maxBribe) {
                    maxBribe = value.bribe
                    biggestBriber = value
            }});
                console.log(maxBribe, biggestBriber);                
        }
    }           
      
    showAllDeputies():void {
        for(let item of this.listofFractions) {
            item.showAllDeputies();
        }
    }
}
           

const verkhovnaRada = new VerkhovnaRada();
verkhovnaRada.addFraction(fraction1);
verkhovnaRada.addFraction(fraction2);
verkhovnaRada.showAllFractions();
verkhovnaRada.addDeputy(deputy7, fraction2);
verkhovnaRada.showAllBribers();
verkhovnaRada.showBiggestBriberInFraction()
verkhovnaRada.showAllDeputies()
