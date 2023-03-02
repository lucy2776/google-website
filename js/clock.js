const HTMLdate = document.querySelector("h6#date");
const clock = document.querySelector("h2#clock");

// 반복
// setInterval(sayHello, 5000);

// setTimeout(sayHello, 5000);

function getClock(){
    const date = new Date();
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 즉시 호출
getClock()
setInterval(getClock, 1000);

function getDate(){
    const date = new Date();

    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2, "0");
    const dates = String(date.getDate()).padStart(2, "0");

    HTMLdate.innerText = `${year}.${month}.${dates}`
}

getDate()
setInterval(getDate, 3600000)