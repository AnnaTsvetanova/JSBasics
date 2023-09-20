function newHouse (input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let finalPrice = 0;

    if (flowerType === 'Roses') {
        finalPrice = flowerCount * 5.00;
        if (flowerCount > 80) {
            finalPrice *= 0.90;        }
    } else if (flowerType === 'Dahlias') {
        finalPrice = flowerCount * 3.80;
        if (flowerCount > 90) {
            finalPrice *= 0.85;        }
    } else if (flowerType === 'Tulips') {
        finalPrice = flowerType * 2.80;
        if (flowerCount > 80) {
            finalPrice *= 0.90;        }
    } else if (flowerType === 'Narcissus') {
        finalPrice = flowerCount * 3;
        if (flowerCount < 120) {
            finalPrice *= 1.15;        }
    } else if (flowerType === 'Glagiolus') {
        finalPrice = flowerCount * 2.50;
        if (flowerCount < 80) {
            finalPrice *= 1.20;        }
    } if ( budget >= finalPrice) {
        let remainingSum = budget - finalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${remainingSum.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
newHouse (["Roses", "55", "250"]);


