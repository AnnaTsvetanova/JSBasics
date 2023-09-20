function depositCalculator(input) {
    
let depositedSum = Number(input[0]);
let depositTerm = Number(input[1]);
let annualInterestRate = Number(input[2]) / 100;

let finalSum = depositedSum + depositTerm * ((depositedSum * annualInterestRate) / 12);
console.log(finalSum)
}
depositCalculator(["200" , "3" , "5.7"])