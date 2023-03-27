// name the var you are going to use
var currentDayEl = document.getElementById("currentDay");

//making the local storage for storing text
var blockOneTextEl = localStorage.getItem('firtHour');
var blockTwoTextEl = localStorage.getItem('secondHour');
var blockThreeTextEl = localStorage.getItem('thirdHour');
var blockFourTextEl = localStorage.getItem('fourthHour');
var blockFiveTextEl = localStorage.getItem('fifthHour');
var blockSixTextEl = localStorage.getItem('sixthHour');
var blockSevenTextEl = localStorage.getItem('seventhHour');
var blockEigthTextEl = localStorage.getItem('eigthHour');
var blockNineTextEl = localStorage.getItem('ninthHour');
// text layout for the content of time
var hour1El = document.getElementById('hour1');
var hour2El = document.getElementById('hour2');
var hour3El = document.getElementById('hour3');
var hour4El = document.getElementById('hour4');
var hour5El = document.getElementById('hour5');
var hour6El = document.getElementById('hour6');
var hour7El = document.getElementById('hour7');
var hour8El = document.getElementById('hour8');
var hour9El = document.getElementById('hour9');
hour1El.textContent = dayJs().hour(9).format('hh A');
hour2El.textContent = dayJs().hour(10).format('hh A');
hour3El.textContent = dayJs().hour(11).format('hh A');
hour4El.textContent = dayJs().hour(12).format('hh A');
hour5El.textContent = dayJs().hour(1).format('hh A');
hour6El.textContent = dayJs().hour(2).format('hh A');
hour7El.textContent = dayJs().hour(3).format('hh A');
hour8El.textContent = dayJs().hour(4).format('hh A');
hour9El.textContent = dayJs().hour(5).format('hh A');

//make a save buttons
var saveBtn1El = document.getElementById('saveBtn1');
var saveBtn2El = document.getElementById('saveBtn2');
var saveBtn3El = document.getElementById('saveBtn3');
var saveBtn4El = document.getElementById('saveBtn4');
var saveBtn5El = document.getElementById('saveBtn5');
var saveBtn6El = document.getElementById('saveBtn6');
var saveBtn7El = document.getElementById('saveBtn7');
var saveBtn8El = document.getElementById('saveBtn8');
var saveBtn9El = document.getElementById('saveBtn9');


if (hour < currentHour) {
    timeBlock.addClass("past");
} else if(hour === currentHour) {
    timeBlock.addClass("present");
} else {
    timeBlock.addClass("future")
}