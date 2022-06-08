function getDate (){
    moment().format('YYYY-MM-DD')
}

var parElement = document.getElementById("currentDay");
var textToAdd = document.createTextNode(moment().format('YYYY-MM-DD'));
parElement.appendChild(textToAdd);
 //above text gets my date function

 let currentHour = moment().format("h:mm:ss");

//  var timeDiv = $(this).attr("id");

//     if (currentHour == timeDiv) {
//         $(this).addclass("present");
//     }else if (currentHour < timeDiv) {
//         $(this).removeClass ("present");
//         $(this).addClass("future");
//     }else if (currentHour > timeDiv) {
//         $(this).removeClass ("future");
//         $(this).addclass("past");
//     };

    