function trainingLab(input) {

    let metersH = Number(input[0]);
    let metersW = Number(input[1]);
    let seatsInH = Math.trunc((metersW - 1) / 0.7);
    let seatsInW = Math.trunc(metersH / 1.2);
    let numberOfSeats = Math.trunc(seatsInW * seatsInH - 3);

console.log(numberOfSeats);
}

trainingLab(["15", "8.9"])

