function flowerShop (input) {

    let magnoliaCount = Number(input[0]);
    let hyacinthsCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactiCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let sumTotal = magnoliaCount * 3.25 + hyacinthsCount * 4 + rosesCount * 3.50 + cactiCount * 8;
    let finalSum = 0.95 * sumTotal;

    if(finalSum >= giftPrice) {
        sumLeft = finalSum - giftPrice;
        console.log(`She is left with ${Math.floor(sumLeft)} leva.`);
    } else {
        sumNeeded = giftPrice - finalSum;
        console.log(`She will have to borrow ${Math.ceil(sumNeeded)} leva.`);
    }

}
flowerShop(["2", "3", "5", "1", "50"])


