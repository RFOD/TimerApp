let duration = 0;
let active = false;
let start = 0;
let end = 0;
let intervalId = null;
let sw = 
{
    reset: () =>
        {
            if (active === true)
            {
                duration = 0;
                active = false;
                start = 0;
                end = 0;
                clearInterval(intervalId);
            }
            else
            {
                
            }
        },
    start: () =>
        {
            if (active === false)
                {
                    active = true;
                    start = Date.now();
                    intervalId = setInterval(() => {
                        let now = Date.now();
                        duration = (now - start)/1000;
                        console.log(duration.toFixed(3))                     
                    } ,50)
                }
                else if (active === true){
                    sw.reset();
                    active = true;
                    start = Date.now();
                    intervalId = setInterval(() => {
                        let now = Date.now();
                        duration = (now - start)/1000;
                        console.log(duration.toFixed(3))                     
                    } ,50)
                }
        },
    stop: () => 
        {

        }
}