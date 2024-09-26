const bodyElement = document.getElementById("main");

let boxElement = document.createElement("div");

boxElement.setAttribute("class", "box");

let title = document.createElement("h1");

title.textContent = "Date Management";

boxElement.append(title);

let fechaHoy = new Date();
let date = new Date(2025, 7, 10, 0, 0);

let countdown = document.createElement("p");
boxElement.append(countdown);

now = new Date();
let difference = date - now;

function currentCounter() {
    if(date > now){
        let totalDays = Math.trunc(difference / (1000 * 60 * 60 * 24));
        let months = Math.trunc(totalDays / 30);
        let days = totalDays % 30;
        let hours = Math.trunc((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.trunc((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.trunc((difference % (1000 * 60)) / 1000);

        if(months >= 1){
            countdown.setAttribute("class", "green");
        } else if(days < 7) {
            countdown.setAttribute("class", "red");
        } else if(months < 1) {
            countdown.setAttribute("class", "orange");
        }

        countdown.textContent = `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    } else {
        countdown.textContent = `Happy Birthday!!!`;
        clearInterval(nombreIntervalo);
    }
    difference -= 1000;
}

let nombreIntervalo = setInterval(currentCounter, 1000);

let datePickerElement = document.createElement("input");
datePickerElement.setAttribute("type", "date");
boxElement.append(datePickerElement);

bodyElement.append(boxElement);

datePickerElement.addEventListener("change", init);

function init() {
    let userDate = new Date(datePickerElement.value);

    if (userDate < now) {
        alert("The date entered has already passed");
        userDate = date;
    }

    difference = userDate - now;    
}
currentCounter();