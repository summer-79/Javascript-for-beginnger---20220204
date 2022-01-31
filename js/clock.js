const h2=document.querySelector("#clock");
function showDate(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    h2.innerHTML=`${hour}:${minute}:${second}`;
}

showDate();
setInterval(showDate, 1000);