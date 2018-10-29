export default function timer() {
    let deadline = '2018-10-31';

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
}

// module.exports = timer;