function maxNumber (input) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let currentInput = input[index];

    while (currentInput !== 'Stop') {
        let inputAsNumber = Number(currentInput);

        if (inputAsNumber > maxNumber) {
            maxNumber = inputAsNumber;
        }
        index++;
        currentInput = input[index];
    }
    console.log(maxNumber);

}
maxNumber (["100","99","80","70","Stop"]);
