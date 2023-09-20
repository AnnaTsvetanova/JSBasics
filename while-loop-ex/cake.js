function cake (input) {
    let index = 0;
    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let currPiece = input[index];
    index++;

    let totalCake = width * length;


    while (currPiece !== 'STOP') {
        currPiece = Number(currPiece);
        totalCake -= currPiece;

        if (totalCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalCake)} pieces more.`);
            return;
        }
        
        currPiece = input[index];
        index++;

    } console.log(`${totalCake} pieces are left.`);



}