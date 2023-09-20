function journey (input) {
    let budget = Number(input[0]);
    let season = (input[1]);

    let sumNeeded = 0;
    let destination = 0;
    let vacationType = 0;

    if (budget <= 100) {

        switch (season) {
            case 'summer':
                destination = 'Bulgaria';
                vacationType = 'Camp';
                sumNeeded = 0.30 * budget;                
                break;
            case 'winter':
                destination = 'Bulgaria';
                vacationType = 'Hotel';
                sumNeeded = 0.70 * budget;
        }
    } else if (budget <= 1000) {

        switch (season) {
            case 'summer':
                destination = 'Balkans';
                vacationType = 'Camp';
                sumNeeded = 0.40 * budget;    
                break;
            case 'winter':
                destination = 'Balkans';
                vacationType = 'Hotel';
                sumNeeded = 0.80 * budget;
                break;
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        vacationType = 'Hotel';
        sumNeeded = 0.90 * budget;
        
    }
    	console.log(`Somewhere in ${destination}`);
        console.log(`${vacationType} - ${sumNeeded.toFixed(2)}`);
}

journey (["120", "summer"]);