'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let ques = prompt("Введите обязательную статью расходов в этом месяце", ""),
        answer = prompt("Во сколько обойдется", "");

    if ((typeof(ques)) === 'string' && (typeof(ques)) != null && (typeof(answer)) 
    != null && ques != '' && answer != '' && ques.length < 50) {
        console.log("Done");
        appData.expenses[ques] = answer;
    } else {
        i--;
    }
};

// let i = 0;
// do {
//     let ques = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         answer = prompt("Во сколько обойдется", "");

//     if ((typeof(ques)) === 'string' && (typeof(ques)) != null && (typeof(answer)) 
//     != null && ques != '' && answer != '' && ques.length < 50) {
//         console.log("Done");
//         appData.expenses[ques] = answer;
//     } else {
//         i--;
//     }
//     i++;
// }
// while (i < 2);


// let i = 0;
// while ( i < 2) {
//     let ques = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         answer = prompt("Во сколько обойдется", "");

//     if ((typeof(ques)) === 'string' && (typeof(ques)) != null && (typeof(answer)) 
//     != null && ques != '' && answer != '' && ques.length < 50) {
//         console.log("Done");
//         appData.expenses[ques] = answer;
//     } else {
//         i--;
//     }
//     i++;
// };

console.log(appData.budget);
appData.moneyPerDay = appData.budget / 30;
alert("Бюджет на 1 день: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Большой уровень достатка");
} else {
    console.log("Произошла ошибка");
};

