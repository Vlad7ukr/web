const inputDate = document.getElementById("birthdate");
const showDay = document.getElementById("show-day");
const result = document.getElementById("result");

showDay.addEventListener("click", function(event) {
    event.preventDefault();
    
    let date = new Date(inputDate.value)

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let a = Math.floor((14 - month)/12);
    let y = year - a;
    let m = month + 12 * a - 2;

    let numOfDay = (day + y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + Math.floor((31*m)/12)) % 7;

    let daysOfWeek = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п'ятницю", "суботу"]
    result.textContent = ("Ви народилися в " + daysOfWeek[numOfDay]);

    if(daysOfWeek[numOfDay] === undefined) {
        result.textContent = ("Ви не ввели дату народження");
    }
})  