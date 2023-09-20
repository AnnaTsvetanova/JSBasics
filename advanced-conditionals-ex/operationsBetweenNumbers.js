function operationsBetweenNumbers(input) {

    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let typeResult = 0;

    if (operator === '+') {
        result = numOne + numTwo;
        if (result % 2 === 0) {
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - even`);
        } else {
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - odd`);
        }
    } else if (operator === '-') {
        result = numOne - numTwo;

        if (result % 2 === 0) {
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - even`);
        } else {
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - odd`);
        }
    } else if (operator === '*') {
        result = numOne * numTwo;
        if (result % 2 === 0) {
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - even`);
        } else {
            console.log(`${numOne} ${operator} ${numTwo} = ${result} - odd`);

        }
    } else if (operator === '/') {
        if (numTwo === 0) {
            console.log(`Cannot divide ${numOne} by zero`);
        } else {
            result = numOne / numTwo;
            console.log(`${numOne} / ${numTwo} = ${result.toFixed(2)}`);

        }
    } else if (operator === '%') {
        if (numTwo === 0) {
            console.log(`Cannot divide ${numOne} by zero`);
        } else {
            result = numOne % numTwo;
            console.log(`${numOne} % ${numTwo} = ${result}`);
        }
    }
}

operationsBetweenNumbers(["10", "0", "%"]);
