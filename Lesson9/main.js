// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.

//callback

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

function meetYourFriend(didYourFriendConfirm, cb) {
    setTimeout(() => {
        if(didYourFriendConfirm) {
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
                            console.log('You will get to work on time!');
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

//Promise 

function getUp1(isWakingUpTrue) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(isWakingUpTrue) {            
            resolve('Good start of the day!');
        } else {
            reject('You overslept');
            }
        }, 1000);
})
}

function cookBreakfast1(isFoodAvailable) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isFoodAvailable) {            
           resolve('Have your breakfast!');
        } else {
            reject('no food');
            }
        }, 1000);
})
}

function getToWork1(catchTheBus) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(catchTheBus) {            
           resolve('You will get to work on time!');
        } else {
            reject('You missed the bus');
            }
        }, 1000);
})
}
    
function goToMeeting1(isReportReady) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isReportReady) {            
           resolve('You are ready for the meeting!');
        } else {
            reject('Report is not ready');
            }
        }, 1000);
})
}
        
function callYourClient1(isClientAvailable) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isClientAvailable) {            
           resolve('You reached your client!');
        } else {
            reject('Client does not answer your call');
            }
        }, 1000);
})
}
            
function getSalary1(isYourCreditCardWithYou) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isYourCreditCardWithYou) {            
           resolve('You got your salary!');
        } else {
            reject('You cannot get salary without the credit card');
            }
        }, 1000);
})
}

function meetYourFriend1(didYourFriendConfirm) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(didYourFriendConfirm) {            
           resolve('Enjoy time with your friend!');
        } else {
            reject('You friend did not confirm your meeting');
            }
        }, 1000);
})
}
  
getUp1(true).then(result => {
    console.log(result);
    return cookBreakfast1(true);
})
.then(result => {
    console.log(result);
    return getToWork1(true);
})
.then(result => {
    console.log(result);
    return goToMeeting1(true);
})
.then(result => {
    console.log(result);
    return callYourClient1(true);
})
.then(result => {
    console.log(result);
    return getSalary1(true);
})
.then(result => {
    console.log(result);
    return meetYourFriend1(true);
})
.then(result => {
    console.log(result);
})    
.catch(reason => {
    console.log(reason);
});

//async/await
 
async function yourDay() {
    try {    
        let result1 = await getUp1(true);
        console.log(result1);
        let result2 = await cookBreakfast1(false);
        console.log(result2);
        let result3 = await getToWork1(true);
        console.log(result3);
        let result4 = await goToMeeting1(true);
        console.log(result4);
        let result5 = await callYourClient1(true);
        console.log(result5);
        let result6 = await getSalary1(true);
        console.log(result6);
        let result7 = await meetYourFriend1(true);
        console.log(result7);
    } catch(e) {
        console.error(e);
    }
}

yourDay();