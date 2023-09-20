function christmasPrep (input) {

    let rollsCout = Number(input[0]);
    let textileCount = Number(input[1]);
    let glueLitres = Number(input[2]);
    let discountPercent = Number(input[3]);

    let rollsPrice = rollsCout * 5.80;
    let textilePrice = textileCount * 7.20;
    let gluePrice = glueLitres * 1.20;
    let totalPrice = rollsPrice + textilePrice + gluePrice;
    let discount = (discountPercent / 100) * totalPrice ;
   
    let discountedPrice = totalPrice - discount;

    console.log(discountedPrice.toFixed(3));
}
christmasPrep(['2', '3', '2.5', '25']);
