function catFood(input) {

    let catsCount = Number(input[0]);
    let totalGrams = 0;
    let gropu1Count = 0;
    let gropu2Count = 0;
    let gropu3Count = 0;



    for (let i = 1; i <= catsCount; i++) {

        let currentGrams = Number(input[i]);

        if (currentGrams >= 100 && currentGrams < 200) {
            gropu1Count++;
        } else if (currentGrams >= 200 && currentGrams < 300) {
            gropu2Count++;
        } else if (currentGrams >= 300 && currentGrams < 400) {
            gropu3Count++;
        }
        totalGrams += currentGrams;
    } let totalKg = totalGrams / 1000;
    let foodPerDayPrice = totalKg * 12.45;
    console.log(`Group 1: ${gropu1Count} cats.`);
    console.log(`Group 2: ${gropu2Count} cats.`);
    console.log(`Group 3: ${gropu3Count} cats.`);
    console.log(`Price for food per day: ${foodPerDayPrice.toFixed(2)} lv.`);
}
catFood(["6", "102", "236", "123", "399", "342", "222"]);

