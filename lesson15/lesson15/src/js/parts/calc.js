export default function calc(){
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if (restDays.value == '') {
                totalValue.innerHTML = 0;
            }else if (restDays.keyCode == 43 && restDays.keyCode == 107) {
                event.preventDefault();
            }else {
                totalValue.innerHTML = total;
            }            
            
        });

        persons.addEventListener('keypress', function(event) {
            if(!/\d/.test(event.key)){
                event.preventDefault();
            } 
        });

        restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if (persons.value == '') {
                totalValue.innerHTML = 0;
            }else {
                totalValue.innerHTML = total;
            }
        });

        restDays.addEventListener('keypress', function(event) {
            if(!/\d/.test(event.key)){
                event.preventDefault();
            } 
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });

        document.body.addEventListener('click', function(){
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            }
        });              
}

// module.exports = calc;