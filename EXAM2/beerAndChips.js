function beerAndChips (input) {

    let name = input[0];
    let preliminaryBudget = Number(input[1]);
    let beerBottlesCount = Number(input[2]);
    let chipsCount = Number(input[3]); 


    let beerPrice = beerBottlesCount * 1.20;
    let chipsPrice = 0.45 * beerPrice;
    let totalChipsPrice = Math.ceil(chipsCount * chipsPrice);

    let totalSum = beerPrice + totalChipsPrice;

    if (preliminaryBudget >= totalSum) {
        let moneyLeft = preliminaryBudget - totalSum;
        console.log(`${name} bought a snack and has ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalSum - preliminaryBudget;
        console.log(`${name} needs ${moneyNeeded.toFixed(2)} more leva!`);
    }
}
beerAndChips(["George", "10", "2", "3"]); 


