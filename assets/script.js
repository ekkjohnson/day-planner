// // 05 Third-Party APIs: Work Day Scheduler Psuedocode

// //Make sure all the links to CDNs are working properly

// //Create basic HTML to resemble mockup
// 	Create 9 rows with 3 columns each
// 	Hour column will be size 1
// 	Description column will be size 10
// 	Savebutton column will be size 1

// Set up an event handler for our save Button
// 	Listen for clicks on each time blocks save button, then save to local storage

//  Load any saved data from localStorage

//  Figure out how to create our text area for the description

//  Display the day, month , and day of month 
//  Moment.js, figure out formatting
// 	 How to track hours
// 	 startOf() function?

//  Color coding of time blocks
// 	 If current hour > time block hour set it to past
// 	 If current hour === time block hour set it to present
// 	 Otherwise set time blocks to future

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function(){
console.log(this);

//compares current time to time slots 
$(".time-div").each(function (timeSlots) {
    var timeDiv = $(this).attr("id").split("-")[1];
if (currentHour===timeDiv){
$(this).addClass("present");
$(this).removeClass("past");
$(this).removeClass("future");
} else if (currentHour<timeDiv){
    $(this).addClass("past");
$(this).removeClass("present");
$(this).removeClass("future");
} else if(currentHour>timeDiv){
    $(this).addClass("future");
$(this).removeClass("past");
$(this).removeClass("present");
}
});
$("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeSlots();
})