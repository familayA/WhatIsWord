function startTimer(duration, display) {
    console.log("timer", duration,display);
    var timer = duration, minutes, seconds;
     var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            alert("game over !!");
            timer = duration;
            clearInterval(interval);
           location.reload();
        }
    }, 1000);

    
}


