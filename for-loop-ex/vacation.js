function vacation(input) {

    let index = 0;
    let vacationPrice = Number(input[index]);
    index++;

    let availableMoney = Number(input[index]);
    index++;

    let consecutiveDaysSpent = 0;
    let totalDays = 0;


    while (availableMoney < vacationPrice) {
        let action = input[index];
        index++;

        let sum = Number(input[index]);
        index++;

        if (action === 'save') {
            availableMoney += sum;
            consecutiveDaysSpent = 0;

        } else if (action === 'spend') {

            if (sum > availableMoney) {
                availableMoney = 0;
            } else {
                availableMoney -= sum;
                consecutiveDaysSpent++;
            }
        }
            totalDays++;

            
        if (consecutiveDaysSpent === 5) {
            console.log("You can't save the money.");
            console.log(`${totalDays}`);
            break;
        }

       
    }

    if (availableMoney >= vacationPrice) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])



