function seriesCalculator (input) {

    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2])
    let seriesDuration = Number(input[3]);


    let adsDuration = 0.2 * seriesDuration; 
    let totalDuration = adsDuration + seriesDuration;
    let totalEpisodesDuration = episodesCount * totalDuration;
    let SpecialEpisodesAdditionalTime = seasonsCount * 10;


    let totalTimeNeeded = SpecialEpisodesAdditionalTime + totalEpisodesDuration * seasonsCount;

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTimeNeeded)} minutes.`);


}
seriesCalculator(['Lucifer', '3', '18', '55']);

