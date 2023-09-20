function goldMine (input) {

    let index = 0;
    let locationsCount = Number(input[index]);
    index++;
    let totalYield = 0;


    for (let i = index; i <= input.length; i++) {

        let predictedYield = Number(input[i]);

        let daysCount = Number(input[i + 1]);

        for (let j = 3; j <= i + daysCount; j++) {
            let currentYield = Number(input[j]);
            totalYield += currentYield;
        } let avrYield = totalYield / daysCount;
        
        }if (avrYield >= predictedYield) {
            console.log(`Good job! Average gold per day: ${avrYield.toFixed(2)}.`);
        } else {
            let goldYieldNeeded = avrYield - predictedYield;
            console.log((`You need ${goldYieldNeeded.toFixed(2)} gold.`));
    } 

}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);


