'use strict'

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    ques = prompt("Введите обязательную статью расходов в этом месяце", ""),
    ques2 = prompt("Во сколько обойдется", ""),
    optionalExpenses;

let appData = {
    money,
    timeData: time,
    expenses: {
        ques,
        ques2
    },
    optionalExpenses,
    income: [],
    savings: false
};

console.log(appData);
alert("Бюджет на 1 день: " + money/30);