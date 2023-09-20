function cleverLily (input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);


    let moneySaved = 0;
    let moneyGiven = 10

    for (let curBirthday = 1; curBirthday <= age; curBirthday++) {
        
        if (curBirthday % 2 !== 0) {
            moneySaved += pricePerToy;
        } else {
            moneySaved += (moneyGiven - 1);
            moneyGiven += 10;
        }

    } if (moneySaved >= washerPrice) {
        let moneyLeft = moneySaved - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`)
    } else {
        let moneyNeeded = washerPrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLily(["10","170.00","6"])