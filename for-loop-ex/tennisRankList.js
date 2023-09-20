
function tennisRankList(input) {
    let gamesPlayed = Number(input[0]);
    let initialPoints = Number(input[1]);


    let pointsTotal = 0;
    let countWon = 0;
    let pointsWon = 0;
    
    for (let i = 2; i < input.length; i++) {

        let gameResult = input[i];
        
        switch (gameResult) {
            case 'W':
                pointsWon += 2000;
                countWon++
                break;
            case 'F':
                pointsWon += 1200;
                break;
            case 'SF':
                pointsWon += 720;
                break;
               
        }  

    }   pointsTotal = initialPoints + pointsWon;
        console.log(`Final points: ${pointsTotal}`);
    let averagePoints = pointsWon / gamesPlayed;
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    let percentGamesWon = (countWon / gamesPlayed) * 100;
    console.log(`${percentGamesWon.toFixed(2)}%`);

}
tennisRankList(["4",
"750",
"SF",
"W",
"SF",
"W"]);
