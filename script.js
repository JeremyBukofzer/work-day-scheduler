

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

function blockDisplay() {
    var currentTime = moment().format('h A');
    
    $('.time-block').each(function() {
        
    var blockHour = $('.hour').text()

            if (blockHour > currentTime) {
                $('.time-block').addClass = '.future';
            } else if (blockHour < currentTime) {
                $('.time-block').addClass = '.past';
            } else {
                $('.time-block').addClass = '.present';
            }
            console.log(blockHour)
            console.log(currentTime)
        })
    }

blockDisplay()