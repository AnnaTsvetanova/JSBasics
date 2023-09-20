function everest(input){

    let index = 0;
    let command = input[index];
    index++;
    
    let daysCount = 1;
    let totalClimbed = 5364;
    
    while (command !== 'END') {
        let currentMeters = Number(input[index]);
        index++;

            if (totalClimbed < 8848) {

            if (command === 'No') {
                daysCount += 0;
            } else {
                daysCount++;
            } totalClimbed += currentMeters;
                        
        } else {
            console.log(`Goal reached for ${daysCount} days!`);
            break;
        }
        
        if (daysCount >= 5) {
            console.log("Failed!")
            console.log(`${totalClimbed}`);
            break;
        } else {
            command = input[index];
            index++;
        }

        
    } if (command === 'END') {

        if (totalClimbed >= 8848) {
            console.log(`Goal reached for ${daysCount} days!`);
        } else {
            console.log("Failed!")
            console.log(`${totalClimbed}`);
        }
    } 
}

everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);


