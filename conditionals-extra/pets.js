function pets (input) {

    let numberOfDays = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtoiseFoodPerDayinGr = Number(input[4]);

    let dogFoodNeeded = numberOfDays * dogFoodPerDay;
    let catFoodNeeded = numberOfDays * catFoodPerDay;
    let turtoiseFoodKG = turtoiseFoodPerDayinGr / 1000;
    let turtoiseFoodNeeded = numberOfDays * turtoiseFoodKG;

    let totalFood = dogFoodNeeded + catFoodNeeded + turtoiseFoodNeeded;

    if (totalFood <= foodLeft) {
    leftover = foodLeft - totalFood;
    console.log(`${Math.floor(leftover)} kilos of food left.`);
} else {
    foodReq = totalFood - foodLeft;
    console.log(`${Math.ceil(foodReq)} more kilos of food are needed.`);
}
}
pets(["2", "10", "1", "1", "1200"])
