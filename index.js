function Stopwatch()
{
    let active = false;
    let duration = 0;
    let start = 0;
    let intervalId = null;
    Object.defineProperty(this, 'duration', {
        get: () =>
        {
            return duration;
        }
    })
    this.reset = () =>
    {
        start = 0;
        end = 0;
        duration = 0;
    }
    this.start = () =>
    {   
        if(start >= 0){
            if (!active){
                active = true;
                start = Date.now();
                intervalId = setInterval(() => {
                    let now = Date.now();
                    duration += (now - start) / 1000;
                    start = now;
                    console.log('Duration: ' + duration.toFixed(3) + ' seconds');
                }, 50);
            }
            else{
            alert("The Stopwatch has been already started")
            }
    }  
    }
    this.stop = () =>
    {
        if(active)
            {
                active = false;
                end = Date.now(); 
                duration += (end - start) / 1000;
                clearInterval(intervalId);
            }else{
                alert("Stopwatch has not been started yet")
            }
        
    }  
}

const sw = new Stopwatch;