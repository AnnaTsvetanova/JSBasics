function multiplication (input) {

    let multiNum = Number(input[0]);
    let result = 0;

    for (i = 1; i <= 10; i++) {
        let currentNum = i;
        result = currentNum * multiNum;
        console.log(`${i} * ${multiNum} = ${result}`);
    } 

}

multiplication(["5"])