function specialNums (input) {
    let num = Number(input[0]);
    let result = '';

    for (let curNum = 1111; curNum < 9999; curNum++) {
    
        isSpecial = true;

        let numAsString = curNum.toString();

        for (let i = 0; i < numAsString.length; i++) {
            let curDigit = Number(numAsString[i]);

            if (num % curDigit !== 0) {
                isSpecial = false;
                break;            
            }

        }
        if (isSpecial) {
            result += curNum + ' ';

        }
    } console.log(result);

}
specialNums(["3"]);