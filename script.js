
// Displays current date at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

// Selects current time using moment.js
var currentTime = moment().hour();


function blockDisplay() {
    
    $('.time-block').each(function() {
        var timeBlock = parseInt($(this).attr('id'))

            if (timeBlock > currentTime) {
                $(this).addClass('past')
            } else if (timeBlock < currentTime) {
                $(this).addClass('future')
            } else if (timeBlock === currentTime) {
                $(this).addClass('present')
            }
            console.log(blockHour)
            console.log(currentTime)
        })
    }

    

blockDisplay()