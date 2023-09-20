function sumPrimeNonPrime(input) {
    let index = 0
    let command = input[index];
    index++;

    let sumOfPrime = 0;
    let sumOfNonprime = 0;

    while (command !== 'stop') {
        let curNum = Number(command);


        if (curNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (divider = 2; divider < curNum; divider++) {

            if (curNum % divider === 0) {
                isPrime = false;
                break;

            }

        } if (isPrime) {
            sumOfPrime += curNum;
        } else {
            sumOfNonprime += curNum;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonprime}`);
}
sumPrimeNonPrime(["-3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
