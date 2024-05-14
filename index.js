let active = false;
let duration = 0;
let start = 0;
let intervalId = null;
let displayedTime = 0;
let sw = 
{
    reset: () =>
    {
        if(active)
            {
                document.querySelector(".stopwatch").textContent = displayedTime;
                active = false;
                clearInterval(intervalId);
                start = 0;
                end = 0;
                duration = 0;
                displayedTime = "0.000 sec";
            }
        else{
            document.querySelector(".stopwatch").textContent = "0.000 sec";
            active = false;
            clearInterval(intervalId);
            start = 0;
            end = 0;
            duration = 0;
            displayedTime = "0.000 sec";
        }
    },
    start: () =>
    {   
        if(start >= 0){
            if (!active){
                active = true;
                document.querySelector(".stopwatch").textContent = "";
                start = Date.now();
                intervalId = setInterval(() => {
                    let now = Date.now();
                    duration += (now - start) / 1000;
                    start = now;
                    displayedTime = (`${duration.toFixed(3)}  sec`);
                    document.querySelector(".stopwatch").textContent = displayedTime;
                }, 25);
            }
            else{
                throw new Error("Stopwatch already active Mr.Fish!");
            } 
        }
        
    },
    stop: () =>
    {
        if(active)
            {
                document.querySelector(".stopwatch").textContent = "";
                active = false;
                end = Date.now(); 
                duration += (end - start) / 1000;
                clearInterval(intervalId);
                displayedTime = (`${duration.toFixed(3)}  sec`);
                document.querySelector(".stopwatch").textContent = displayedTime;
            }else{
                throw new Error("Stopwatch already stopped Mr.Fish!!");
            }
        
    }  

}
Object.defineProperty(sw, 'duration', {
    get: () =>
    {
        return duration;
    }
})

let stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", sw.stop)

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", sw.reset)

let startBtn = document.querySelector(".start");
startBtn.addEventListener("click", sw.start)

// Game mechanic for precision stoping the sw. Make a leaderboard and of course multiplayer
