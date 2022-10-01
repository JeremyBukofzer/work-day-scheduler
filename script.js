

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

function blockDisplay() {
    var currentTime = moment().hour();

    $(".time-block")

    if(hour > currentTime) {
        textArea.addClass = '.future';
    } else if(hour < currentTime) {
        textArea.addClass = '.past';
}
}

//if hour is < current time
    //style= past
//else if hour is > current time
    //style = future
//else style = present
