//this is the variable to manage data rules
const date = new Date();
//sets target date. (8)  represents days till event.
date.setDate(date.getDate() + 8) 
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// converts target date to a date object
let targetDate = date;

//sets the loop to update the countdown once a second
let x = setInterval(function () {
    
    // gets the current time
    let now = new Date().getTime();

    // gets the time remaining
    let distance = targetDate - now;

    // updates css span tags with countdown values
    document.querySelector('#days').innerHTML = Math.floor(distance / (day))+" days, ";
    document.querySelector('#hours').innerHTML = Math.floor((distance % (day)) / (hour))+" hours, ";
    document.querySelector('#minutes').innerHTML = Math.floor((distance % (hour)) / (minute))+" minutes, ";
    document.querySelector('#seconds').innerHTML = Math.floor((distance % (minute)) / second)+" seconds ";
}, second)
  
// add js to update any one who- enters email and submits- once a day at noon with time left remaining.
    
  