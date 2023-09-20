function maidenParty (input) {

    let maidenPartyPrice = Number(input[0]);
    let loveLettersCount = Number(input[1]);
    let waxRosesCount = Number(input[2]);
    let keyChainCount = Number(input[3]);
    let caricaturesCount = Number(input[4]);
    let surpriseNotesCount = Number(input[5]);

    let totalSum = loveLettersCount * 0.60 + waxRosesCount * 7.20 + keyChainCount * 3.60 + caricaturesCount * 18.20 + surpriseNotesCount * 22;
    let totalCount = loveLettersCount + waxRosesCount + keyChainCount + caricaturesCount + surpriseNotesCount;
    

    if (totalCount >= 25) {
        totalSum *= 0.65;
    }
    let hostingPrice= 0.10 * totalSum;
    totalSum -= hostingPrice;

    if (totalSum >= maidenPartyPrice) {
        let moneyLeft = totalSum - maidenPartyPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeded = maidenPartyPrice - totalSum;
        console.log(`Not enough money! ${moneyNeded.toFixed(2)} lv needed.`);
    }
}
maidenParty(['40.8','20', '25', '30', '50', '10']);


