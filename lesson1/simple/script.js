'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    ques = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer = +prompt("Во сколько обойдется", ""),
    ques2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2 = +prompt("Во сколько обойдется", "");
    

let appData = {
    money,
    timeData: time,
    expenses: {
        [ques]:answer,
        [ques2]:answer2,
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("Бюджет на 1 день: " + money/30);
console.log(appData);
console.log(appData.expenses);