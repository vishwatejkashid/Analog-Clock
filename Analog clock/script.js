let hour  = document.querySelector("#hour");
let  minute= document.querySelector("#minute");
let seconds = document.querySelector("#seconds");

let set_clock =setInterval(()=>{
    let time_now = new Date();
    // console.log(time_now);
    let hr = time_now.getHours();
    let min = time_now.getMinutes();
    let sec = time_now.getSeconds();

    // let calc_hr = (hr * 30) + (min/2);
    // let calc_min = (min * 6) + (sec/10);
    // // console.log(calc_min)
    // let calc_sec = sec * 5
    // console.log(calc_sec)

    let calc_hr = (hr * 30) + (min / 2) ; // 360 degrees / 12 hours = 30 degrees per hour
    // console.log(calc_hr);
    let calc_min = (min * 6) + (sec / 10);       // 360 degrees / 60 minutes = 6 degrees per minute
    // console.log(calc_min);
    let calc_sec = sec * 6;                        // 360 degrees / 60 seconds = 6 degrees per second

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    seconds.style.transform = `rotate(${calc_sec}deg)`;

},1000)
