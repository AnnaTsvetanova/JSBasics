function steps(input) {
    let index = 0;
    let stepsCount = 0;
    
    let stepsIn = input[index];
    index++;

    
        while (stepsIn !== 'Going home') {
        stepsIn = Number(stepsIn);
        stepsCount += stepsIn;

        if (stepsCount >= 10000) {
            break;  
            
        }

        stepsIn = input[index];
        index++;

    }   if (stepsIn === 'Going home') {
        let additionalSteps = Number(input[index]);
        stepsCount += additionalSteps;

        if (stepsCount >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsCount - 10000} steps over the goal!`);
        } else {
        let stepsNeeded = 10000 - stepsCount;
        console.log(`${stepsNeeded} more steps to reach goal.`);
        }
      
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${stepsCount - 10000} steps over the goal!`);
    }
}



steps(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


