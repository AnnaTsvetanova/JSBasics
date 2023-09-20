function fuelTank(input) {
    let fuelType = input[0];
    let fuelQty = Number(input[1]);

    if (fuelType === "Diesel" || fuelType === "Gasoline" || fuelType === "Gas") {

        if (fuelQty >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else if (fuelQty < 25) {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}
fuelTank(['Water', '10'])
