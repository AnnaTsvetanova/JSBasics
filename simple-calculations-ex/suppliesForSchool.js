 function suppliesForSchool(input) {

    let penPackages = Number(input[0]);
    let markerPackages = Number(input[1]);
    let detergent = Number(input[2]);
    let discountRate = Number(input[3]) / 100;

    let penPackagesPrice = penPackages * 5.80;
    let markerPackagesPrice = markerPackages * 7.20;
    let detergentPrice = detergent * 1.20;

    let totalMaterialPrice = penPackagesPrice + markerPackagesPrice + detergentPrice
    let discountedPrice = totalMaterialPrice - (totalMaterialPrice * discountRate ) 

console.log(discountedPrice)
}
suppliesForSchool(["2" , "3" , "4" , "25"])