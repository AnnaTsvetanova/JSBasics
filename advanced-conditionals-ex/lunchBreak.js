function lunchBreak(input) {
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = (1 / 8) * breakDuration;
    let leisureTime = (1 / 4) * breakDuration;
    let totalTimeTaken = lunchTime + leisureTime;

    let movieTime = breakDuration - totalTimeTaken;

    if (movieTime >= episodeDuration) {
        let timeLeft = movieTime - episodeDuration;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    } else {
        let timeNeeded = episodeDuration - movieTime;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}
lunchBreak (["Teen Wolf", "48", "60"])

