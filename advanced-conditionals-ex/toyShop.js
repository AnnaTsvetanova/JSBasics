function toyShop (input) {
    let holidayCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let totalCount = puzzleCount + dollsCount + bearCount + minionCount + truckCount;
    let totalSum = puzzleCount * 2.60 + dollsCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;

    if (totalCount >= 50) {
        totalSum = 0.75 * totalSum;
    } 

    totalSum = 0.90 * totalSum;

    if (totalSum >= holidayCost) {
        let moneyleft = totalSum - holidayCost;
        console.log(`Yes! ${moneyleft.toFixed(2)} lv left.` );
    } else {
        let moneyNeeded = holidayCost - totalSum;
        console.log (`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"])