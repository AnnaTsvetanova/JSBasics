function santasHoliday(input) {

    let daysStay = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nightsStay = daysStay - 1;
    let priceForStay = 0;

    switch (roomType) {
        case 'room for one person':
            priceForStay = nightsStay * 18.00;
            break;
        case 'apartment':
            priceForStay = nightsStay * 25.00;
            break;
        case 'president apartment':
            priceForStay = nightsStay * 35.00;
            break;
    }

    if (daysStay < 10) {
        switch (roomType) {
            case 'apartment':
                priceForStay *= 0.70;
                break;
            case 'president apartment':
                priceForStay *= 0.90;
                break;
        }
    } else if (daysStay >= 10 && daysStay <= 15) {
        switch (roomType) {
            case 'apartment':
                priceForStay *= 0.65;
                break;
            case 'president apartment':
                priceForStay *= 0.85;
                break;
        }
    } else if (daysStay > 15) {
        switch (roomType) {
            case 'apartment':
                priceForStay *= 0.50;
                break;
            case 'president apartment':
                priceForStay *= 0.80;
                break;
        }

    } if (feedback === 'positive') {
        priceForStay *= 1.25;
    } else {
        priceForStay *= 0.9;
    }

    console.log(priceForStay.toFixed(2));
}

santasHoliday(['14', 'apartment', 'positive']);
