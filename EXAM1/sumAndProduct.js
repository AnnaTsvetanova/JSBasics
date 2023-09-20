function sumAndProduct(input) {

    let number = Number(input[0]);


    let isValid = false;
    let checkOne = number % 10;
    let checkTwo = number % 3;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b <= a; b++) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d <= c; d++) {

                    if (a + b + c + d === a * b * c * d && checkOne === 5) {
                        isValid = true;
                    } else if (a * b * c * d / a + b + c + d === 3 && checkTwo === 0) {
                        isValid = true;

                    } else {
                        isValid = false;
                    }
                }
            }
        }
    } if (isValid) {
        console.log(`${a}${b}${c}${d}`);
        console.log(`${d}${c}${b}${a}`);
    } else {
        console.log("Nothing found");
    }
}


sumAndProduct(["214"]);
