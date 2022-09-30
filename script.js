var hour = document.getElementById('hour-num')
var textArea = document.querySelector('textarea')

var currentTime = moment("hh");


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

var blockDisplay = function() {
    if(hour > currentTime) {
        textArea.style = '.future';
    } else if(hour < currentTime) {
        textArea.style = '.past';
}
}
//if hour is < current time
    //style= past
//else if hour is > current time
    //style = future
//else style = present
