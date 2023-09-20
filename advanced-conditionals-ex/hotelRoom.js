function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let aptPrice = 0;
    let studioPrice = 0;

    if (month === 'May' || month === 'October') {
        studioPrice = nightsCount * 50;
        aptPrice = nightsCount * 65;

        if (nightsCount > 7 && nightsCount <= 14) {
            studioPrice *= 0.95;
        } else if (nightsCount > 14) {
            studioPrice *= 0.70;
        }
    } else if (month === 'June' || month === 'September') {
        studioPrice = nightsCount * 75.20;
        aptPrice = nightsCount * 68.70;

        if (nightsCount > 14) {
            studioPrice *= 0.80;
        }
    } else if (month === 'July' || month === 'August') {
        studioPrice = nightsCount * 76;
        aptPrice = nightsCount * 77;

    } if (nightsCount > 14) {
        aptPrice *= 0.90;
    }
    console.log(`Apartment: ${aptPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"]);



