function fishLand(input) {
    let mackerelPrice = Number(input[0]);
    let sprinklePrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let musselsKg = Number(input[4])

    let total = (mackerelPrice * 0.60 + mackerelPrice) * bonitoKg + (sprinklePrice * 0.80 + sprinklePrice) * safridKg + musselsKg * 7.50

    console.log(total.toFixed(2));
}

fishLand(["6.90" , "4.20" , "1.5" , "2.5" , "1"])



