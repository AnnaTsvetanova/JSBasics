function basketballEquipment(input) {

    let annualBasketballTrainingTax = Number(input[0]);

    let basketballShoes = annualBasketballTrainingTax - annualBasketballTrainingTax * 0.40;
    let basketballset = basketballShoes - basketballShoes * 0.20;
    let basketball = basketballset * 1 / 4;
    let basketballAccessoiries = basketball * 1 / 5;

    let totalBasketballTrainingCosts = annualBasketballTrainingTax + basketballShoes + basketballset + basketball + basketballAccessoiries;

console.log(totalBasketballTrainingCosts)
}

basketballEquipment(["365"])