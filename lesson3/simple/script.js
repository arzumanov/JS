'use strict';
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget(a, b) {
    return(a / b);
}

appData.moneyPerDay = detectDayBudget(appData.budget, 30);
alert("Бюджет на 1 день: " + detectDayBudget(appData.budget, 30).toFixed());

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Большой уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let a = 1; a < 4; a++) {
        let ques1 = prompt("Статья необязательных расходов", "");
    
        if ((typeof(ques1)) === 'string' && (typeof(ques1)) != null 
        && ques1 != '' && ques1.length < 50) {
            console.log("Done");
            appData.optionalExpenses[a] = ques1;
        } else {
            a--;
        }
    }
}

chooseOptExpenses();

console.log(appData);