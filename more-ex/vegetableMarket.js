function vegetableMarket(input) {

    let kiloVegetablePrice = Number(input[0]);
    let kiloFruitPrice = Number(input[1]);
    let totalVegetableQty = Number(input[2]);
    let totalFruitQty = Number(input[3])

    let totalIncomeInEuro = (kiloVegetablePrice * totalVegetableQty + kiloFruitPrice * totalFruitQty) / 1.94;

    console.log(totalIncomeInEuro.toFixed(2));
}

vegetableMarket(["0.194" , "19.4" , "10" , "10"])

