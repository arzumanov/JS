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
    savings: true,

    chooseExpenses: function() {
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
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30);
        alert("Бюджет на 1 день: " + appData.moneyPerDay.toFixed());
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Большой уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        } 
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function () {
        for (let i = 1; i < 2; i++) {
            let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)","");
            
            if ((typeof(items)) === 'string' && (typeof(items)) != null 
            && items != '') {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что то еще?",""));
                appData.income.sort();
            }
            else {
                i--;
            }
        }
        appData.income.forEach(function(item, i){
            alert("Способы доп заработка: " + (i+1) + ". " + item);
        });       
    }

};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
}