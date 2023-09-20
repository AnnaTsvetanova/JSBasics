function computerRoom(input) {

    let month = input[0]; //"march", "april", "may", "june", "july", "august"
    let hoursSpent = Number(input[1]);
    let peopeInGroup = Number(input[2]);
    let timeOfDay = input[3]; //"day" или "night"
    let pricePerPerson = 0;

    if (peopeInGroup >= 4) {

        if (timeOfDay === 'day') {
            switch (month) {
                case 'march':
                case 'april':
                case 'may':
                    pricePerPerson = 0.9 * 10.50;
                    break;
                case 'june':
                case 'july':
                case 'august':
                    pricePerPerson = 0.9 * 12.60;
                    break;
            }
        } else {
            switch (month) {
                case 'march':
                case 'april':
                case 'may':
                    pricePerPerson = 0.9 * 8.40;
                    break;
                case 'june':
                case 'july':
                case 'august':
                    pricePerPerson = 0.9 * 10.20;
                    break;
            }
        }
    } else {
        if (timeOfDay === 'day') {
            switch (month) {
                case 'march':
                case 'april':
                case 'may':
                    pricePerPerson = 10.50;
                    break;
                case 'june':
                case 'july':
                case 'august':
                    pricePerPerson = 12.60;
                    break;
            }
        } else {
            switch (month) {
                case 'march':
                case 'april':
                case 'may':
                    pricePerPerson = 8.40;
                    break;
                case 'june':
                case 'july':
                case 'august':
                    pricePerPerson = 10.20;
                    break;

            }
        }
    }
    if (hoursSpent >=5) {
        pricePerPerson *= 0.5; 
    } 

    let totalPrice = peopeInGroup * pricePerPerson;
    let finalPrice = totalPrice * hoursSpent;

    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${finalPrice.toFixed(2)}`);
}
    computerRoom(["july", "5", "5", "night"]);





