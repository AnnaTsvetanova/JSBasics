function sumOf2Nums (input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    
    let isValidCombination = false;
    let combinationCount = 0;

    for (let a = startNum; a <= endNum; a++) {
        for (let b = startNum; b <= endNum; b++) {
            combinationCount++;
            let sum = a + b;

            if (sum === magicNum) {
                console.log(`Combination N:${combinationCount} (${a} + ${b} = ${magicNum})`);
                isValidCombination = true;
                break;
            }
         
        }  if(isValidCombination) {
            break;
        }
    
    } if (!isValidCombination) {
            console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
            }
    }

sumOf2Nums(["1","10","5"])
