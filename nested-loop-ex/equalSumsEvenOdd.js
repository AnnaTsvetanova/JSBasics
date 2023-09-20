function equalSumEvenOdd(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let result = '';

    for (let currNum = numOne; currNum <= numTwo; currNum++) {
        let sumOdds = 0;
        let sumEvens = 0;

        let currNumAsString = currNum.toString();

        for (let i = 0; i < currNumAsString.length; i++) {
            
            let currDigit = Number(currNumAsString[i]); 
            let position = i + 1;

            if (position % 2 === 0) {
                sumEvens += currDigit;
            } else {
                sumOdds += currDigit;
            }
            
            }if (sumEvens === sumOdds) {
                result += currNumAsString + ' ';

        }

    } console.log(result);

}
equalSumEvenOdd(["100000", "100050"]);
