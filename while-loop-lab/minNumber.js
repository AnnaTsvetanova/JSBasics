function minNumber (input) {
    let minNumber = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let currentInput = input[index];

    while (currentInput !== 'Stop') {
        let inputAsNumber = Number(currentInput);

        if (inputAsNumber < minNumber){
            minNumber = inputAsNumber;
        }
        index++;
        currentInput = input[index];
    }
console.log(minNumber);
}
minNumber(["100","99","80","70","Stop"]);
