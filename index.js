const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");


setInterval(()=>{
    const date = new Date;
    const secDeg = date.getSeconds()/60 * 360;
    const minDeg = date.getMinutes()/60 * 360;
    const hourDeg = date.getHours()/12 * 360;
    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
},1000)

