function foodDelivery(input) {

    let chickenMenusQuantity = Number(input[0]);
    let fishMenusQuantity = Number(input[1]);
    let vegetarianMenusQuantity = Number(input[2]);


    let chickenMenuPrice = chickenMenusQuantity * 10.35;
    let fishMenuPrice = fishMenusQuantity * 12.40;
    let vegetarianMenuPrice = vegetarianMenusQuantity * 8.15;

    let totalPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;

    let desertPrice = totalPrice * 0.20;
    let deliveryPrice = 2.50;
    let totalDeliveryPrice = totalPrice + desertPrice + deliveryPrice;
    
    console.log(totalDeliveryPrice)
}
foodDelivery(["2" , "4" , "3"])
