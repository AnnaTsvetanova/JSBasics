function transportPrice (input) {

    let kmCount = Number(input[0]);
    let travellingTime = input[1];

    if (kmCount < 20 && travellingTime === "day") {
        let travelPrice = 0.70 + 0.79 * kmCount;
        console.log(travelPrice.toFixed(2));

    } else if (kmCount < 20 && travellingTime === "night") {
        let travelPrice = 0.70 + 0.90 * kmCount;
        console.log(travelPrice.toFixed(2));

    } else if (kmCount >= 20 && kmCount < 100) {
        let travelPrice = 0.09 * kmCount;
        console.log(travelPrice.toFixed(2));

    } else if (kmCount >= 100) {
        let travelPrice = 0.06 * kmCount;
        console.log(travelPrice.toFixed(2));
}
}
transportPrice (["7", "night"])


