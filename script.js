
// Displays current date at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

// Selects current time using moment.js
var currentTime = moment().hour();

//starts the documents functions
$(document).ready(function () {
    //save button
    $('.saveBtn').on('click', function() {
        var taskBox = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, taskBox)
    })
    // function to decide what color the time block is.
    function blockDisplay() {
    
        $('.time-block').each(function() {
            var timeBlock = parseInt($(this).attr('id').split('hour')[1])
    
                if (timeBlock > currentTime) {
                    $(this).addClass('future').removeClass('past present')
                }  else if (timeBlock === currentTime) {
                    $(this).addClass('present').removeClass('future past')
                } else {
                    $(this).addClass('past').removeClass('future present')
                }
            })
        }
        //gets item from local storage when filled out and saved.
        $('#hour9 .description').val(localStorage.getItem('hour9'))
        $('#hour10 .description').val(localStorage.getItem('hour10'))
        $('#hour11 .description').val(localStorage.getItem('hour11'))
        $('#hour12 .description').val(localStorage.getItem('hour12'))
        $('#hour13 .description').val(localStorage.getItem('hour13'))
        $('#hour14 .description').val(localStorage.getItem('hour14'))
        $('#hour15 .description').val(localStorage.getItem('hour15'))
        $('#hour16 .description').val(localStorage.getItem('hour16'))
        $('#hour17 .description').val(localStorage.getItem('hour17'))

        blockDisplay()
    })
 



