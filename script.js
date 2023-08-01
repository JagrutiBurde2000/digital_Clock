
const digitalClock=document.getElementById("digitalClock"); 

function showTime(){
    var date=new Date();  //give current date time 
var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var session ="AM";

//12 hr format
if(hr==0){
    hr=12;
}
if(hr>12){
    hr=hr-12;
    session="PM"
}
if(hr<10){
hr="0"+hr;
}
if(min<=9){
    min="0"+min;
}
if(sec<10){
    sec="0"+sec;
}
digitalClock.innerHTML=hr+":"+min+":"+sec+" "+session;

setInterval(showTime,1000);
}
showTime();

