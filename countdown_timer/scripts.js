const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');


// first we have to create a date at which counter goes off
var end_date=new Date(2021,0,01,0,0,0);

function count_down() {
    // current time
    const curr_date=new Date();
    // now we have to split this into days,hours,mins,seconds
    // we know that date object store time as milli seconds + origin date
    // therefor time between two time is
    const seconds=(end_date-curr_date)/1000;
    const days=Math.floor(seconds/3600/24);
    const hours=Math.floor(seconds/3600)%24;
    const mins=Math.floor(seconds/60)%60;
    const secs=Math.floor(seconds)%60;
    console.log(days,hours,mins,secs);

    daysEl.innerHTML = format_time(days); 
    hoursEl.innerHTML = format_time(hours);
    minsEl.innerHTML = format_time(mins);
    secondsEl.innerHTML = format_time(secs);
};




function format_time(time){
    return time<10 ? (`0${time}`) : time;
};
setInterval(count_down,1000);
count_down();

