window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }



    infoHeader.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // Timer
    let deadline = '2018-10-25';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/(1000/60/60) % 24));
            // days = Math.floor(t/(1000*60*60*24));

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
                // 'days': days
            };
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            // days = timer.querySelector('.days')
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = ('0' + t.hours).slice(-2);
            minutes.textContent = ('0' + t.minutes).slice(-2);
            seconds.textContent = ('0' + t.seconds).slice(-2);
            // days.textContent = t.days;

            if(t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);
    
    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let info = document.querySelector('.info');

    info.addEventListener('click', function (e) {
        let target = e.target;
        if( target.className === 'description-btn' ){
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что то пошло не так...'

    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');    

    function sendForm(elem) {
        elem.addEventListener('submit', function(e){
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function(resolve, reject){
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState == 4) {
                                if (request.status == 200 && request.status < 3){
                                    resolve();
                                }
                                else {
                                    reject();
                                }
                            }
                        }
                        request.send(data);
                    }) 
				}
				
                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
				}
				
				postData(formData)
					.then(()=> statusMessage.innerHTML = message.loading)
					.then(()=> {
						statusMessage.innerHTML = message.success;
					})
					.catch(()=> statusMessage.innerHTML = message.failure)
					.then(clearInput)
		});		
    }

	sendForm(form);
	sendForm(formbottom);

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

    //     let formData = new FormData(form);

    //     let obj = {};
    //     formData.forEach(function(value, key){
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj);

    //     request.send(json);

    //     request.addEventListener('readystatechange', function(){
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState == 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //         for (let i = 0; i < input.length; i++) {
    //             input[i].value = '';
    //         }
    // });
    // Contacts Form
    
    let contactsForm = document.getElementById('form'),
        contactsInput = contactsForm.querySelectorAll('input');
        
    
    contactsForm.addEventListener('submit', function(event){
        event.preventDefault();
        contactsForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(contactsForm);

        let obj = {};
        formData.forEach(function(value, key){
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function(){
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState == 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

            for (let i = 0; i < contactsInput.length; i++) {
                contactsInput[i].value = '';
            }
    });

    // Проверка телефона
    
    input[0].addEventListener('focus', function() {
        if(!/^\+\d*$/.test(input[0].value)) {
            input[0].value = '+';
        }
    });    

    input[0].addEventListener('keypress', function(event) {
        if(!/\d/.test(event.key)){
            event.preventDefault();
        } 
    });

    contactsInput[1].addEventListener('focus', function() {
        if(!/^\+\d*$/.test(contactsInput[1].value)) {
            contactsInput[1].value = '+';
        }
    });

    contactsInput[1].addEventListener('keypress', function(event) {
        if(!/\d/.test(event.key)){
            event.preventDefault();
        } 
    });
});