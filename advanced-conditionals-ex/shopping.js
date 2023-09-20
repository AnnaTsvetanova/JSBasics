function shopping(input) {

    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoPrice = videoCardsCount * 250;
    let processorsPrice = videoPrice * 0.35 * processorCount;
    let ramPrice = videoPrice * 0.10 * ramCount;

    let finalSum = videoPrice + processorsPrice + ramPrice;

    if (videoCardsCount > processorCount) {
        finalSum = 0.85 * finalSum
    }

    if (finalSum <= budget) {
        let budgetLeft = budget - finalSum;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    } else if (budget < finalSum) {
        let neededSum = finalSum - budget;
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva more!`);
    }
}

shopping (["900", "2", "1", "3"])
