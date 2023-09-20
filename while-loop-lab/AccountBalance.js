function accountBalance (input) {

    let totalMoney = 0;
    let index = 0;
    let currentElement = input[index];
    
    while (currentElement !== "NoMoreMoney") {

        let elementAsNumber = Number(currentElement);

        if(elementAsNumber < 0) {
            console.log("Invalid operation!");
            break;
        }

        totalMoney += elementAsNumber;
        console.log(`Increase: ${elementAsNumber.toFixed(2)}`);
        currentElement = input[++index];
    }

console.log(`Total: ${totalMoney.toFixed(2)}`);



}
accountBalance(["5.51", "69.42","100","NoMoreMoney"]);

// Напишете функция, която пресмята колко общо пари има в сметката, след като направите определен брой вноски. 
// Във всеки елемент ще получавате сумата, която трябва да внесете в сметката, до получаване на команда "NoMoreMoney" .
//  При всяка получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката. 
//  Ако получите число по-малко от 0 на конзолата трябва да се изведе "Invalid operation!"
//  и програмата да приключи. Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката.