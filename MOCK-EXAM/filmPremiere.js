function moviePremiere(input) {

    let movieName = input[0];
    let moviePackage = input[1];
    let ticketsCount = Number(input[2]);
    
    let packagePrice = 0;
    let totalPrice = packagePrice * ticketsCount;
    

    if (movieName === 'John Wick') {
        
        switch (moviePackage) {
            case 'Drink':
                packagePrice  = 12;
                break;
            case 'Popcorn':
                packagePrice  = 15;
                break;
            case 'Menu':
                packagePrice  = 19;
                break;
        }

    } else if (movieName === 'Star Wars') {

        switch (moviePackage) {
            case 'Drink':
                packagePrice  = 18;
                break;
            case 'Popcorn':
                packagePrice  = 25;
                break;
            case 'Menu':
                packagePrice  = 30;
                break;
        }

    } else {
        switch (moviePackage) {
            case 'Drink':
                packagePrice  = 9;
                break;
            case 'Popcorn':
                packagePrice  = 11;
                break;
            case 'Menu':
                packagePrice  = 14;
                break;
        }
        
        
        if (movieName === 'Star Wars' && ticketsCount >= 4) {
            totalPrice *= 0.7;
        } else if (movieName === 'Jumanji' && ticketsCount === 2) {
            totalPrice *= 0.85;
        }

        


    } console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`)
}
moviePremiere(["John Wick", "Drink", "6"]);

