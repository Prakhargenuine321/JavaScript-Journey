const clock = document.querySelector('.clock');

setInterval(function(){ //to repeatedly execute a given function at a specified interval
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000);