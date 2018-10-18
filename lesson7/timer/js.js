function timer(){
 
    var hour = document.getElementById('hour').innerHTML;
    var minute = document.getElementById('minute').innerHTML;
    var second = document.getElementById('second').innerHTML;
    var end = false;
     
    if( second > 0 ) 
    second--;
    else{
        second = 59;         
        if( minute > 0 ) 
        minute--;
        else{
            second = 59;             
            if( hour > 0 ) 
            hour--;
            else 
            end = true;
        }
    }
 
    if(end){
        clearInterval(intervalID);
        alert("Time is out");
    }if (hour < 10){
        document.getElementById('hour').innerHTML = ("0" + hour).slice(-2);
    }
    if (minute < 10) {
        document.getElementById('minute').innerHTML = ("0" + minute).slice(-2);
    }
    if (second < 10) {
        document.getElementById('second').innerHTML = ("0" + second).slice(-2);
    }
    else{
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1000);