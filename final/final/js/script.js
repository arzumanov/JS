window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    // Modal
    let popupBtn = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        closeEngineer = document.querySelectorAll('.popup_close')[1];
        
    popupBtn.addEventListener('click', function(){
        popupEngineer.style.display = 'block';
        popupEngineer.classList.add('animated');
        popupEngineer.classList.add('fadeIn');  
        
    });

    popupEngineer.addEventListener('click', function(){
        popupEngineer.style.display = 'none';
    });

    closeEngineer.addEventListener('click', function(){
        popupEngineer.style.display = 'none';
    });

    // Modal2 
    let phoneLink = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup'),
        closePopup = document.querySelectorAll('.popup_close')[0];

        for (let i = 0; i < phoneLink.length; i++) {
            phoneLink[i].addEventListener('click', function(){
                popup.style.display = 'block';
                popup.classList.add('animated');
                popup.classList.add('fadeIn');
            });
        }

        popup.addEventListener('click', function(){
            popup.style.display = 'none';
        });
        closePopup.addEventListener('click', function(){
            popup.style.display = 'none';
        });
});
    
    
    