// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає об’єкт з методами:
// User Card методи:
// getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про карту:
// Об’єкт має містити такі властивості:
// • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та транзакції данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard функції. Кожна карта повинна мати унікальний key) 
// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс карти
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти (протилежний за дією від метода putCredits) 
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати відповідне повідомлення у консолі (скористайтеся console.error)
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці
// transferCredits. Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача (інший об’єкт, створений функцією `userCard` - card1). Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit change операції і зберігайте history log.
// History log - інформація має зберігатись в об’єктах з такими властивостями: 
// • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)

function userCard(num) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key;
    num > 0 && num < 4 ? key = num : console.error('Please enter key number from 1 to 3');

    function getCardOptions() {
        return {
            key,
            balance,
            transactionLimit,
            historyLogs
        };
    }
    function putCredit(amount){
        balance += amount;
        let time = new Date();
        historyLogs.push({operationType: 'received credits',  credits: amount, operationTime: time})
    }
    function takeCredit(amount) {
        amount < balance && amount < transactionLimit ? 
        balance -= amount : console.error('You do not have enough balance or have exceeded your transaction limit');
        let time = new Date();
        historyLogs.push({operationType: 'withdrawal of credits',  credits: amount, operationTime: time})
    }
    function setTransactionLimit(amount) {
        transactionLimit = amount;
        let time = new Date();
        historyLogs.push({operationType: 'transaction limit change',  credits: amount, operationTime: time})
    }
    function transferCredits(amount, card) {
        let transferedAmount = (amount * 1.005);        
        if(transferedAmount < balance && transferedAmount < transactionLimit) {
            balance -= transferedAmount.toFixed(2);
            card.putCredit(amount); 
            let time = new Date();
            historyLogs.push({operationType: 'withdrawal of credits',  credits: +transferedAmount.toFixed(2), operationTime: time});
        } else {                                                                                                          
            console.error('You do not have enough balance or have exceeded your transaction limit');
        }
    }
    return { getCardOptions,
            putCredit, 
            takeCredit,            
            setTransactionLimit,
            transactionLimit,
            transferCredits
    }
}

// 2) Створити UserAccount:
// Створити класс `UserAccount` (для цього завдання можна використати ES6 класс або звичайну функцію):
// Класс має містити:
// Властивості акаунту користувача:
// - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
// - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до cards
// Користувач повинен мати <= 3 карти
// - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти

function UserAccount (name) {
    this.name = name;
    this.card = [];
    this.addCard = function() { 
        this.card.push(userCard(this.card.length + 1));
    }
    this.getCardByKey = function(num){
        if( num > 0 && num < 4 ) {        
            return this.card.find(field => field.getCardOptions().key === num);
        } else {
        console.error('Please enter number from 1 to 3');
        }
    }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredit(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredit(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());