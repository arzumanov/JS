'use strict';
let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    ques = prompt('Как вы относитесь к технике Apple?', ''), 
    answer = document.getElementById('prompt');   
    
    

// Поменял местами пункты 
menu.insertBefore(menuItem[2], menuItem[1]);
// Добавил 5-ый пункт
li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';
// Поменял фоновую картинку
document.body.style.background = "url(./img/apple_true.jpg) center no-repeat";
// Изменил title
title.innerHTML = 'Мы продаем только подлинную технику Apple';
// Удалил рекламу
column[1].removeChild(adv); 
// Вставляем ответ пользователя
answer.textContent = ques;




// console.log(menu);
// console.log(menuItem);
// console.log(li);
// console.log(title);
// console.log(column);
// console.log(ques); 