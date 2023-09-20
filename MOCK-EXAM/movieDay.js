function movieDay (input) {

    let shootingTime = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneDurtion = Number(input[2]);

    let prepTime = 0.15 * shootingTime;
    let timeForScenes = scenesCount * sceneDurtion;
    let totalTime = prepTime + timeForScenes;

    if (totalTime >= shootingTime) {
        let timeNeeded = totalTime - shootingTime;
         console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
    } else {
        let timeLeft = shootingTime - totalTime;
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeLeft)} minutes left!`);
    }

   

}
movieDay(["120", "10", "11"]);




