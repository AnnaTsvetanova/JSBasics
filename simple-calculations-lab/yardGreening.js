function yardGreening(input) {
    let totalPrice = Number(input[0]) * 7.61;  
    let discount = Number(totalPrice) * 0.18;
    let finalPrice = Number(totalPrice) - Number(discount);

    console.log(`The final price is: ${finalPrice} lv. \n The discount is: ${discount} lv.`)   
}
yardGreening(['550'])