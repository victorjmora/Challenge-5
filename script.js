
//Current time
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = dayjs().format('dddd, MMMM DD');
// Setting up local storage to text
var fieldOneElText = localStorage.getItem('firstHour');
var fieldTwoElText = localStorage.getItem('secondHour');
var fieldThreeElText = localStorage.getItem('thirdHour');
var fieldFourElText = localStorage.getItem('fourthHour');
var fieldFiveElText = localStorage.getItem('fifthHour');
var fieldSixElText = localStorage.getItem('sixthHour');
var fieldSevenElText = localStorage.getItem('seventhHour');
var fieldEightElText = localStorage.getItem('eighthHour');
var fieldNineElText = localStorage.getItem('ninthHour');
// Text content of the time.
var time1El = document.getElementById('time1')
var time2El = document.getElementById('time2')
var time3El = document.getElementById('time3')
var time4El = document.getElementById('time4')
var time5El = document.getElementById('time5')
var time6El = document.getElementById('time6')
var time7El = document.getElementById('time7')
var time8El = document.getElementById('time8')
var time9El = document.getElementById('time9')
time1El = dayjs().hour(9).format('hh A')
time2El = dayjs().hour(10).format('hh A')
time3El = dayjs().hour(11).format('hh A')
time4El = dayjs().hour(12).format('hh A')
time5El = dayjs().hour(13).format('hh A')
time6El = dayjs().hour(14).format('hh A')
time7El = dayjs().hour(15).format('hh A')
time8El = dayjs().hour(16).format('hh A')
time9El = dayjs().hour(17).format('hh A')
// get save buttons
var saveBtn1El = document.getElementById('saveBtn1');
var saveBtn2El = document.getElementById('saveBtn2');
var saveBtn3El = document.getElementById('saveBtn3');
var saveBtn4El = document.getElementById('saveBtn4');
var saveBtn5El = document.getElementById('saveBtn5');
var saveBtn6El = document.getElementById('saveBtn6');
var saveBtn7El = document.getElementById('saveBtn7');
var saveBtn8El = document.getElementById('saveBtn8');
var saveBtn9El = document.getElementById('saveBtn9');
//Confirm save
var locationConfirmEl = document.getElementById('locationConfirmed');

// Save input and store it 1
saveBtn1El.addEventListener('click', function () {
    var fieldOneEl = document.getElementById('field1');
    var fieldOneElText = fieldOneEl.value;
    localStorage.setItem('firstHour', fieldOneElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 2

saveBtn2El.addEventListener('click', function () {
    var fieldTwoEl = document.getElementById('field2');
    var fieldTwoElText = fieldTwoEl.value;
    localStorage.setItem('secondHour', fieldTwoElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 3
saveBtn3El.addEventListener('click', function () {
    var fieldThreeEl = document.getElementById('field3');
    var fieldThreeElText = fieldThreeEl.value;
    localStorage.setItem('thirdHour', fieldThreeElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 4
saveBtn4El.addEventListener('click', function () {
    var fieldFourEl = document.getElementById('field4');
    var fieldFourElText = fieldFourEl.value;
    localStorage.setItem('fourthHour', fieldFourElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 5
saveBtn5El.addEventListener('click', function () {
    var fieldFiveEl = document.getElementById('field5');
    var fieldFiveElText = fieldFiveEl.value;
    localStorage.setItem('fifthHour', fieldFiveElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 6
saveBtn6El.addEventListener('click', function () {
    var fieldSixEl = document.getElementById('field6');
    var fieldSixElText = fieldSixEl.value;
    localStorage.setItem('sixthHour', fieldSixElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 7
saveBtn7El.addEventListener('click', function () {
    var fieldSevenEl = document.getElementById('field7');
    var fieldSevenElText = fieldSevenEl.value;
    localStorage.setItem('seventhHour', fieldSevenElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 8
saveBtn8El.addEventListener('click', function () {
    var fieldEightEl = document.getElementById('field8');
    var fieldEightElText = fieldEightEl.value;
    localStorage.setItem('eighthHour', fieldEightElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});
// Save input and store it 9
saveBtn9El.addEventListener('click', function () {
    var fieldNineEl = document.getElementById('field9');
    var fieldNineElText = fieldNineEl.value;
    localStorage.setItem('ninthHour', fieldNineElText);
    locationConfirmEl.textContent =' The Item was saved in the Local Storage ✔️';
});

// Text persists after refresh
var fieldOneEl = document.getElementById('field1').value = fieldOneElText;
var fieldTwoEl = document.getElementById('field2').value = fieldTwoElText;
var fieldThreeEl = document.getElementById('field3').value = fieldThreeElText;
var fieldFourEl = document.getElementById('field4').value = fieldFourElText;
var fieldFiveEl = document.getElementById('field5').value = fieldFiveElText;
var fieldSixEl = document.getElementById('field6').value = fieldSixElText;
var fieldSevenEl = document.getElementById('field7').value = fieldSevenElText;
var fieldEightEl = document.getElementById('field8').value = fieldEightElText;
var fieldNineEl = document.getElementById('field9').value = fieldNineElText;

//Set bg color 
function colorize() {
    //Hour 1
    if (dayjs().isSame(dayjs().hour(9))) {
        document.getElementById('field1').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(9))) {
        document.getElementById('field1').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field1').style.backgroundColor = "green";
    }
    //Hour 2
    if (dayjs().isSame(dayjs().hour(10))) {
        document.getElementById('field2').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(10))) {
        document.getElementById('field2').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field2').style.backgroundColor = "green";
    }
    //Hour 3
    if (dayjs().isSame(dayjs().hour(11))) {
        document.getElementById('field3').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(10))) {
        document.getElementById('field3').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field3').style.backgroundColor = "green";
    }
    //Hour 4
    if (dayjs().isSame(dayjs().hour(12))) {
        document.getElementById('field4').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(12))) {
        document.getElementById('field4').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field4').style.backgroundColor = "green";
    }
    //Hour 5
    if (dayjs().isSame(dayjs().hour(13))) {
        document.getElementById('field5').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(13))) {
        document.getElementById('field5').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field5').style.backgroundColor = "green";
    }
    //Hour 6
    if (dayjs().isSame(dayjs().hour(14))) {
        document.getElementById('field6').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(14))) {
        document.getElementById('field6').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field6').style.backgroundColor = "green";
    }
    //Hour 7
    if (dayjs().isSame(dayjs().hour(15))) {
        document.getElementById('field7').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(15))) {
        document.getElementById('field7').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field7').style.backgroundColor = "green";
    }
    //Hour 8
    if (dayjs().isSame(dayjs().hour(16))) {
        document.getElementById('field8').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(16))) {
        document.getElementById('field8').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field8').style.backgroundColor = "green";
    }
    //Hour 9
    if (dayjs().isSame(dayjs().hour(17))) {
        document.getElementById('field9').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(17))) {
        document.getElementById('field9').style.backgroundColor = "bisque";
    } else {
        document.getElementById('field9').style.backgroundColor = "green";
    }
}

setInterval(colorize, 100)