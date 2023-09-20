function combinations (input) {

    let number = Number(input[0]) 
    let validCombinationsCount = 0;

    for (let x = 0; x <= number; x++) {
        for (let y = 0; y <= number; y++) {
            for (let z = 0; z <= number; z++) {

                if (x + y + z === number) {
                    validCombinationsCount++;
                    
                } 

            }
        }   
    } console.log(validCombinationsCount);

}
combinations(["25"]);
