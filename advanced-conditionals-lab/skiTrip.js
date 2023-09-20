function skiTrip (input) {

    let numDays = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];

    let roomCost = 0;
    let numNights = numDays - 1;

    if (numDays < 10) {

        switch (roomType) {
            case 'room for one person':
                roomCost = numNights * 18.00;                
                break;
            case 'apartment':
                roomCost = numNights * 25.00;
                roomCost *= 0.70;
                break;
            case 'president apartment':
                roomCost = numNights * 35.00; 
                roomCost *= 0.90;
                break;
        }
    } else if (numDays >= 10 && numDays <= 15) {
        switch (roomType) {
            case 'room for one person':
                roomCost = numNights * 18.00;                
                break;
            case 'apartment':
                roomCost = numNights * 25.00;
                roomCost *= 0.65;
                break;
            case 'president apartment':
                roomCost = numNights * 35.00; 
                roomCost *= 0.85;
                break;
    }
    } else if (numDays > 15) {
        switch (roomType) {
            case 'room for one person':
                roomCost = numNights * 18.00;                
                break;
            case 'apartment':
                roomCost = numNights * 25.00;
                roomCost *= 0.50;
                break;
            case 'president apartment':
                roomCost = numNights * 35.00; 
                roomCost *= 0.80;
                break;
    }
}
    if (rate === 'positive') {
        roomCost *= 1.25;

    } else {
        roomCost *= 0.90;
    } 
    console.log(roomCost.toFixed(2));
}

skiTrip(["30",
"president apartment",
"negative"]);




