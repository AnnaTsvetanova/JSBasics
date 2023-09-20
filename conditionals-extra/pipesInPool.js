function pipesInPool (input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);

    let VolPerPipe1 = H * P1;
    let VolPerPipe2 = H * P2;
    let totalVol = VolPerPipe1 + VolPerPipe2;

    if(totalVol <= V) {
        let percentageFull = totalVol * 100 / V;
        let percentageP1 = VolPerPipe1 * 100 / totalVol;
        let percentageP2 = VolPerPipe2 * 100 / totalVol;

        console.log(`The pool is ${percentageFull.toFixed(2)}% full. Pipe 1: ${percentageP1.toFixed(2)}%. Pipe 2: ${percentageP2.toFixed(2)}%.`);
    } else {
        let litresMore = totalVol - V;

        console.log(`For ${H} hours the pool overflows with ${litresMore.toFixed(2)} liters.`);
    }
}
pipesInPool([100, 100, 100, 2.5])
