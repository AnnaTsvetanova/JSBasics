function sumOfNumbers (input) {
    let initialNum = Number(input[0]);
    let sum = 0;
    let index = 1;
    let currentNum = Number(input[index]);

    while (sum < initialNum) {
        sum += currentNum;
        index++;
        currentNum = Number(input[index]);

    } console.log(sum);
}

sumOfNumbers (["100", "10", "20", "30", "40"]);
