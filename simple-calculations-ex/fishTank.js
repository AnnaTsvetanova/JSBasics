function fishTank(input) {

    let lengthInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heighInCm = Number(input[2]);
    let occupiedSpace = Number(input[3]) / 100;

    let fishTankVolume = lengthInCm * widthInCm * heighInCm;
    let volumeInLitres = fishTankVolume * 0.001

    let litresVolume = volumeInLitres * (1 - occupiedSpace);

console.log(litresVolume)
}
fishTank(["85" , "75" , "47" , "17"])