// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.

function getUp(isWakingUpTrue, cb) {
    setTimeout(() => {
        if(isWakingUpTrue) {            
            cb(null, 'ok');
        } else {
            cb('err', null);
            }
        }, 1000);
}

function cookBreakfast(isFoodAvailable, cb) {
    setTimeout(() => {
        if(isFoodAvailable) {            
            cb(null, 'ok');
        } else {
            cb('err', null);
            }
        }, 1000);
}
        
function getToWork(catchTheBus, cb) {
    setTimeout(() => {
        if(catchTheBus) {            
            cb(null, 'ok');
        } else {
            cb('err', null);
            }
        }, 1000);
}
    
function goToMeeting(isReportReady, cb) {
    setTimeout(() => {
        if(isReportReady) {
            cb(null, 'ok');
        } else {
            cb('err', null);
            }
        }, 1000);
}
        
function callYourClient(isClientAvailable, cb) {
    setTimeout(() => {
        if(isClientAvailable) {
            cb(null, 'ok');
        } else {
            cb('err', null);
            }
        }, 1000);
}
        
function getSalary(isYourCreditCardWithYou, cb) {
    setTimeout(() => {
        if(isYourCreditCardWithYou) {
            cb(null, 'ok');
        } else {
            cb('err', null);
            }
        }, 1000);
}

function meetYourFriend(didYourFriendConfirmed, cb) {
    setTimeout(() => {
        if(didYourFriendConfirmed) {
            cb(null, 'ok');
        } else {
            cb('err', null);
            }
        }, 1000);
}

getUp(true, (err, ok) => {
    if(err) {
        console.log('Stop sleeping!');
            } else {
                console.log('Good start of the day!');    
                cookBreakfast(true, (err, ok) => {
            if(err) {
                console.log('No food');
            } else {
                console.log('Have your breakfast!');
                getToWork(true, (err, ok) => {
                        if(err) {
                            console.log('You are late');
                        } else {
                            console.log('You got to work on time!');
                            goToMeeting(true, (err, ok) => {
                                if(err) {
                                    console.log('Report is not ready');
                                } else {
                                    console.log('You are ready for the meeting!')
                                    callYourClient(true, (err, ok) => {
                                        if(err) {
                                            console.log('Client does not answer your call');
                                        } else {
                                            console.log('You reached your client!');
                                            getSalary(true, (err, ok) => {
                                                if(err) {
                                                    console.log('You cannot get salary without the credit card');
                                                } else {
                                                    console.log('You got your salary!');
                                                    meetYourFriend(true, (err, ok) => {
                                                        if(err) {
                                                            console.log('You will not meet your friend today');
                                                        } else {
                                                            console.log('Enjoy time with your friend!');
                                                    }
                                                });
                                            }               
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

