function numsDevBy9 (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    
    for (let i = num1; i <= num2; i++) {
        let currentNum = i;
        if (currentNum % 9 === 0) {
        sum = sum + currentNum    
        }       
    } console.log(`The sum: ${sum}`);
    for (let i = num1; i <= num2; i++) {
        let currentNum = i;
        if (currentNum % 9 === 0) {
          console.log(currentNum);   
        } 
    }  
      
}

numsDevBy9(["100", "200"]);