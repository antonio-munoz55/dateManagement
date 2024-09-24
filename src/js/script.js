const bodyElement = document.getElementById("main")

/*const datePickerElement = document.getElementById()

datePickerElement.addEventListener("change", () => {

})*/

let titulo = document.createElement("h1")

titulo.textContent = "Gestión de fechas"

bodyElement.append(titulo)

let fechaHoy = new Date()
let date = new Date(2024, 7, 10, 0, 0)

console.log(`%cgetDay: %c${date.getDay()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetFullYear: %c${date.getFullYear()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%cgetMonth (0 es enero): %c${date.getMonth()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%cgetDate (día del mes): %c${date.getDate()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%cgetHours: %c${date.getHours()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetMinutes: %c${date.getMinutes()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetSeconds: %c${date.getSeconds()}`,` font-weight: bold; color: blue;`, "");
console.log(`%cgetTime (milisegundos): %c${date.getTime()}`,` font-weight: bold; color: blue;`, ""); 
console.log(`%ctoDateString: %c${date.toDateString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoLocaleDateString: %c${date.toLocaleDateString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoJSON: %c${date.toJSON()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoTimeString: %c${date.toTimeString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoLocaleTimeString: %c${date.toLocaleTimeString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoString: %c${date.toString()}`,` font-weight: bold; color: blue;`, "");
console.log(`%ctoLocaleString: %c${date.toLocaleString()}`,` font-weight: bold; color: blue;`, "");

let months = document.createElement("span")
let days = document.createElement("span")
let hours = document.createElement("span")
let minutes = document.createElement("span")

bodyElement.append(months)
bodyElement.append(days)
bodyElement.append(hours)
bodyElement.append(minutes)

let msSeconds = 1000
let msMinutes = msSeconds * 60
let msHours = msMinutes * 60
let msDays = msHours * 24
let msMonths = msHours * 30


let nombreIntervalo = setInterval(()=>{
    let now = new Date()
    let duration = date - now
    let remainigDays = Math.floor(duration / msDays)
    
    days.textContent = remainigDays
}, 1000)







/*let number = now.getTime()

let timeElement

timeElement.innerText = number

let counter = setInterval(() => {
    number--
    timeElement.innerText = number

    if(){
        clearInterval(counter)
    }
}, 1000)*/