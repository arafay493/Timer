var hour = 24;
var min = 59;
var sec = 59;
var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var interval;

function timer(){
    sec--;
    secHeading.innerHTML = sec;

    if(sec == 0){
        min--;
        minHeading.innerHTML = min;
        sec = 59
    }
    else if(min == 0){
        hour--;
        hourHeading.innerHTML = hour;
        min = 59
    }

}

function disable_btn(){
    document.getElementById('str_btn').disabled = true
    
}  

function enable_btn(){
    document.getElementById('str_btn').disabled = false
}  

function start(){
    
    interval = setInterval(timer , 1000);
    
}

function stop(){
    clearInterval(interval);
}


function reset(){
    hour = 24;
    min = 59;
    sec = 59;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    hourHeading.innerHTML = hour;
    stop();
}