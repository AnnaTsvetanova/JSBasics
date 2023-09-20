function weatherForecastTwo (input) {
    
    let a = Number(input[0]);

    if (a >= 26.00 && a <= 35.00) {
       console.log("Hot");
    } else if (a >= 20.1 && a <= 25.9) {
       console.log("Warm");
    } else if (a >= 15.00 && a <= 20.00) {
       console.log("Mild");
    } else if (a >= 12.00 && a <= 14.9) {
       console.log("Cool");
    } else if (a >= 5.00 && a <= 11.9) {
       console.log("Cold");
    } else {
       console.log("unknown");
   } 
}
 weatherForecastTwo([11])
