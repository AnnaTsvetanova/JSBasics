function movieProfit (input) {

    let movieName = input[0];
    let numberOfDays = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let ticketsPerDayPrice = ticketPrice * ticketsCount; 
    let priceForWholePeriod = ticketsPerDayPrice * numberOfDays;
    let percentTaken = priceForWholePeriod * cinemaPercent / 100;
    let studioProfit = priceForWholePeriod - percentTaken;


    console.log(`The profit from the movie ${movieName} is ${studioProfit.toFixed(2)} lv.`);



}
movieProfit(['The Programmer', '20', '500', 
'7.50', '7']);

