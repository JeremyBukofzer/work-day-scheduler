
// Displays current date at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

// Selects current time using moment.js
var currentTime = moment().hour();

$(document).ready(function () {

    $('.saveBtn').on('click', function() {
        var taskBox = $('.description').text()

        localStorage.setItem(taskBox)
    })

    function blockDisplay() {
    
        $('.time-block').each(function() {
            var timeBlock = parseInt($(this).attr('id').split('hour')[1])
    
                if (timeBlock > currentTime) {
                    $(this).addClass('past').removeClass('future present')
                }  else if (timeBlock === currentTime) {
                    $(this).addClass('present').removeClass('future past')
                } else {
                    $(this).addClass('future').removeClass('past present')
                }
            })
        }

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
 



