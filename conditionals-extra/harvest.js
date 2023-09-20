function harvest (input) {

    let vineYardArea = Number(input[0]);
    let vinePerSqM = Number(input[1]);
    let LitresWine = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrapes = vineYardArea * vinePerSqM;
    let wine = 0.40 * totalGrapes / 2.5;

    if (wine < LitresWine) {
        let wineNeeded = LitresWine - wine;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`);
    } else {
        let remainingWine = wine - LitresWine;
        winePerWorker = remainingWine / workersCount;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(remainingWine)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
}
harvest(["650", "2", "175", "3"])

