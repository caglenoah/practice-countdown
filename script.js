const date = new Date();
date.setDate(date.getDate() + 30)
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let targetDate = date;

let x = setInterval(function() {
    
    let now = new Date().getTime();
    let distance = targetDate - now;

    document.querySelector('#days').innerHTML = Math.floor(distance / (day)) + "days, ";
    document.querySelector('#hours').inntHTML = Math.floor((distance % (day)) / (hour)) + "hours, ";
    document.querySelector('#minutes').innerHTML = Math.floor((distance % (hour)) / (minute)) + " minutes, ";
    ('#seconds').innerHTML = Math.floor((distance % (minute)) / second)+" seconds ";
}, second)

