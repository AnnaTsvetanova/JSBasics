function theSleepyTomCat (input) {

    let daysOff = Number(input[0]);

    let workDays = 365 - daysOff;
    let playTime = workDays * 63 + daysOff * 127;

    if (playTime > 30000) {
        let morePlayTime = playTime - 30000;
        H = morePlayTime / 60;
        M = morePlayTime % 60;
        console.log("Tom will run away");
        console.log(`${Math.floor(H)} hours and ${M} minutes more for play`);
    } else { 
        let moreSleepTime = 30000 - playTime;
        H = moreSleepTime / 60;
        M = moreSleepTime % 60;

        console.log("Tom sleeps well");
        console.log(`${Math.floor(H)} hours and ${M} minutes less for play`);
    }
}

theSleepyTomCat (["113"])




