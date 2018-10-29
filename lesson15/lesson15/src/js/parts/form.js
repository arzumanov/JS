export default function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что то пошло не так...'

    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        contactsForm = document.getElementById('form'),
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
                        };
                        request.send(data);
                    });
				}
				
                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
				}
				
				postData(formData)
					.then(() => (statusMessage.innerHTML = message.loading))
					.then(() => (statusMessage.innerHTML = message.success))
					.catch(() => (statusMessage.innerHTML = message.failure))
					.then(clearInput);
		});		
    }
    sendForm(form);
    sendForm(contactsForm);

    const inputPhone = document.querySelectorAll('input[name="phone"]');

   
    [...inputPhone].forEach(elem => (elem));

    // Contacts Form
    
    let contactsInput = contactsForm.querySelectorAll('input');

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
}

// module.exports = form;