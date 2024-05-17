let duration = 0;
let active = false;
let start = 0;
let end = 0;
let intervalId = null;
let player;
let input = document.querySelector("#inputId");
let Player = function(goal){
    this.goal = goal;
    this.play = (duration) => { if (Number(input.value) > 0)
        {
            let offset = Math.abs(goal - duration); displayOffset(`${offset.toFixed(3)} sec`)
        }else{
            alert("Didn't set the goal!")
        }}
}
let displayOffset = (message) => {document.querySelector(".offset").innerHTML = message;}

let sw = 
{
    reset: () =>
        {
            { 
                if (Array.from(document.querySelector(".resetD").classList).map((x) => x) !== ".erase")
                    {
                        document.querySelector(".resetD").classList.add("erase");
                        document.querySelector(".stopD").classList.remove("erase");
                    }
                sw.display("")
                sw.display("0.000 sec")
                duration = 0;
                active = false;
                start = 0;
                end = 0;
                clearInterval(intervalId);
            }
        },
    start: () =>
        {
            if (active === false)
                {
                    if (Array.from(document.querySelector(".resetD").classList).map((x) => x) !== ".erase")
                        {
                            document.querySelector(".resetD").classList.add("erase");
                            document.querySelector(".stopD").classList.remove("erase");
                        }
                    else if (Array.from(document.querySelector(".stopD").classList).map((x) => x) !== ".erase")
                        {
                            document.querySelector(".resetD").classList.remove("erase");
                            document.querySelector(".stopD").classList.add("erase");
                        }
                    active = true;
                    start =  Date.now()/1000;
                    intervalId = setInterval(() => {
                    let now = Date.now()/1000;
                    duration += (now - start);
                    start = now;
                    sw.display(duration.toFixed(3) + " sec");
                    } ,20)   
                }
                else if (active === true){
                    sw.reset();
                    active = true;
                    start = Date.now()/1000;
                    intervalId = setInterval(() => {
                    let now = Date.now()/1000;
                    duration = (now - start);
                    sw.display(duration.toFixed(3) + " sec");                     
                    } ,20)
                }
        },
    stop: () => 
        {
            if(active === true)
                {
                    if (Array.from(document.querySelector(".stop").classList).map((x) => x) !== ".erase")
                        {
                            document.querySelector(".resetD").classList.remove("erase");
                            document.querySelector(".stopD").classList.add("erase");
                        }
                    active = false;
                    clearInterval(intervalId);
                    let input= document.querySelector("#inputId");
                    let offset = document.querySelector(".offset");
                    offset.classList.remove("erase")
                    input.classList.add("erase")
                    player.play(duration);
                }
        },
    display: (message) =>
        {
            document.querySelector(".stopwatch").innerHTML = message;
        } 
}
let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => sw.reset());

let startBtn = document.querySelector(".start");
startBtn.addEventListener("click", () => sw.start());

let stopBtn = document.querySelector(".stop");
stopBtn.addEventListener("click", () => sw.stop());

let newPlayerBtn = document.querySelector(".newPlayer");
newPlayerBtn.addEventListener("click", () => {
    let input= document.querySelector("#inputId");
    let offset = document.querySelector(".offset");
    let goal = Number(input.value);
    player = new Player(goal);
    offset.classList.add("erase")
    input.classList.remove("erase")

    
    sw.reset();
});