function getDate (){
    moment().format('YYYY-MM-DD')
}

var parElement = document.getElementById("currentDay");
var textToAdd = document.createTextNode(moment().format('YYYY-MM-DD'));
parElement.appendChild(textToAdd);
 //above text gets my date function

 let currentHour = moment().format("h:mm:ss");
console.log(currentHour) 
$(".time-div").each(function(){
 var timeDiv = $(this).attr("id");

    if (currentHour == timeDiv) {
        $(this).addClass("present");
    }else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("past");
    }else if (currentHour > timeDiv) {
        $(this).removeClass("past");
        $(this).addClass("future");
    };
});
document.querySelector('span').addEventListener(click)

document.querySelector('button').onclick = function(event) {
    var a = event.target.innerHTML;
    console.log(a);
  
  }