function sumOfNumbers (input) {

    let numAsString = input.toString();
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currentNum = Number(numAsString[i]);
        sum = sum + currentNum;
        } console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers (["1234"])