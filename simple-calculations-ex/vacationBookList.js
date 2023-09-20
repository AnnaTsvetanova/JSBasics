function vacationBookList(input) {

let currentBookPages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let numberOfDays = Number(input[2]);
let totalReadingTime = currentBookPages / pagesPerHour;
let hoursPerDay = totalReadingTime / numberOfDays;

console.log(hoursPerDay)
}

vacationBookList(["212" , "20" , "2"])