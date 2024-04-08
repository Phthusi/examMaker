class Timer{
    constructor(updateAfterSeconds = 1){
        this.updateAfterSeconds = updateAfterSeconds*1000;
    }

    setTime(hours, minutes, seconds) {
        let remainingTime = hours * 3600 + minutes * 60 + seconds;
        const timeElement = document.querySelector(".time");
        // Update the timer every second
        let timerInterval = setInterval(updateTimer, this.updateAfterSeconds);

        function addZero(value){
            return value.length==1? `0${value}`:value;
        }

        // Function to update the timer
        function updateTimer() {
            if (remainingTime >= 0) {
                let hours = Math.floor(remainingTime / 3600);
                let minutes = Math.floor((remainingTime % 3600) / 60);
                let secs = remainingTime % 60;
                
                // Format the time values
                let formattedTime = `${addZero(`${hours}`)}:${addZero(`${minutes}`)}:${addZero(`${secs}`)}`;
                if(hours===0 && minutes<=5) {
                    timeElement.innerHTML = `<p class="red">TIME REMAINING: ${formattedTime}</p>`;
                }else if(hours===0 && minutes<=10 ) {
                    timeElement.innerHTML = `<p class="orange">TIME REMAINING: ${formattedTime}</p>`;
                }else{
                    // Update the HTML element
                    timeElement.innerHTML = `<p class="green">TIME REMAINING: ${formattedTime}</p>`;
                
                }

                remainingTime--;
            } else {
                // Stop the timer when it reaches zero
                clearInterval(timerInterval);
            }
        }
        
        // Initial call to update the timer
        updateTimer();
        
    }
}

export {Timer} 