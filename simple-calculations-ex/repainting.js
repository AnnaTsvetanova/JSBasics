function repainting(input) {

    let nylonQuantity = Number(input[0]) + 2;
    let paintQuantity = Number(input[1]) + 0.10 * Number(input[1]);
    let thninnerQuantity = Number(input[2]);
    let numberOfHours = Number(input[3]);

    let nylonPrice = nylonQuantity * 1.50;
    let paintPrice = paintQuantity * 14.50;
    let thinnerPrice = thninnerQuantity * 5;
    let nylonBagsPrice = 0.40;

    let totalMaterialsPrice = nylonPrice + paintPrice + thinnerPrice + nylonBagsPrice;
    let paintersCost = (totalMaterialsPrice * 0.30) * numberOfHours;

    let totalExpences = totalMaterialsPrice + paintersCost;
    
    console.log(totalExpences)
}
repainting(["10" , "11" , "4" , "8"])
