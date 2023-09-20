function godzillaVsKong (input) {

    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let costumePerActorPrice = Number(input[2]);

    let decorPrice = 0.10 * budget;
    let totalCostumeCost = actorsCount * costumePerActorPrice;


    if (actorsCount > 150) {
      totalCostumeCost = 0.90 * totalCostumeCost;
    }

    let totalCost = decorPrice + totalCostumeCost

    if (totalCost > budget) {
            let moneyNeeded = totalCost - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - totalCost;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000", "120", "55.5"])