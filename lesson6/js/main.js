let btn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expensesV = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    btnExpenses = document.getElementsByTagName('button')[0],
    btnOptional = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sumV = document.querySelector('.choose-sum'),
    percentV = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


let money, time;

btnExpenses.disabled = true;
btnOptional.disabled = true;
btnCount.disabled = true;

btn.addEventListener('click', function(){    
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    btnExpenses.disabled = false;
    btnOptional.disabled = false;
       
    btnExpenses.style.background = 'green';

});

btnExpenses.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let ques = expensesItem[i].value,
            answer = expensesItem[++i].value;
    
        if ((typeof(ques)) === 'string' && (typeof(ques)) != null && (typeof(answer)) 
        != null && ques != '' && answer != '' && ques.length < 50) {
            console.log("Done");
            appData.expenses[ques] = answer;
            sum += +answer;
        } else {
            i--;
        }
    }
    expensesV.textContent = sum;
    appData.sum = sum;

    btnCount.disabled = false;
    btnCount.style.background = 'green';
});


btnOptional.addEventListener('click', function(){
    for (let a = 0; a < optionalExpensesItem.length; a++) {
        let opt = optionalExpensesItem[a].value;
        if ((typeof(opt)) === 'string' && (typeof(opt)) != null && opt != '') {
            appData.optionalExpenses[a] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[a] + ' ';
        }
    }
});


btnCount.addEventListener('click', function(){

    if(appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget - appData.sum) / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
    
        if(appData.moneyPerDay < 100) {
            level.textContent = "Минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "Средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "Большой уровень достатка!";
        } else {
            level.textContent = "Произошла ошибка!";
        }
    } else {
        dayBudget.textContent = "Произошла ошибка!";
    }
});

incomeItem.addEventListener('change', function(){
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumV.addEventListener('input', function(){
    if(appData.savings == true) {
        let sum = +sumV.value,
            percent = +percentV.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }

});

percentV.addEventListener('input', function(){
    if(appData.savings == true) {
        let sum = +sumV.value,
            percent = +percentV.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};