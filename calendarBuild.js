const currentDate = document. querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".calendar-header span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () =>{
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth , 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        if (i === 1 || i === lastDateofMonth) {
            liTag += `<li class="highlight-inactive">${i}</li>`;
        } else {
            liTag += `<li>${i}</li>`;
        }
    }

    for (let i = lastDayofMonth + 1; i <= 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth}</li>`;
    }
    

       currentDate.innerText = `${months[currMonth]} ${currYear}`;
       daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon =>{
    icon.addEventListener("click", () =>{
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        renderCalendar(); 
    })
})