let time = document.getElementById('time');

function data() {
    let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
    
    let z = function (i) {
        if (i < 10) {
            i = '0' + i;
            return i;
        } 
        else {
            return i;
        }
    }
   
    time.textContent = z(hour) + ':' + z(minute) + ':' + z(second);
    
} 

let timer = setInterval(data, 1000);
// clearInterval(timer);