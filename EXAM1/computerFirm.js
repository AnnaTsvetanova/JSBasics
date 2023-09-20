function computerFirm (input) {

    let index = 0;
    let computersCount = Number(input[index]);
    index++;
    
    let salesMade = 0;
    let ratingCounter = 0;

    for (i = index; i <= computersCount; i++) {
        let currentNum = Number(input[index]);
        let rating = currentNum % 10;

        let numAsString = currentNum.toString();
        let possibleSales = numAsString.substring(0, numAsString.length - 1);
        let totalSales = Number(possibleSales);
        
        if (rating === 2) {
                totalSales *= 0;
            } else if (rating === 3 ) {
                totalSales *= 0.5;
            } else if (rating === 4) {
                totalSales *= 0.7;
            } else if (rating === 5) {
                totalSales *= 0.85;
            } else if (rating === 6) {
                totalSales *= 1;
            }
        
            salesMade += totalSales;
            ratingCounter += rating;
            index++;
        }  let avrRating = ratingCounter / computersCount;
        console.log(salesMade.toFixed(2));
        console.log(avrRating.toFixed(2));

}
 
computerFirm(["5", "122", "156", "202", "214", "185"]);

45.00
3.80