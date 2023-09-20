function vacation (input) {
    let index = 0;
    let destination = input[index];
    index++;

    let moneyNeeded = Number(input[index]);
    index++;
    let moneySaved = 0;

    while (destination !== 'End') {
        while (moneySaved < moneyNeeded) {
            let currentMoney = Number(input[index]);
            moneySaved += currentMoney;
            
    	    
            index++;
            currentMoney = Number(input[index]);
        } if (moneySaved >= moneyNeeded) {
        console.log(`Going to ${destination}!`);
        
    }   
        destination = input[index];
        index++;
        moneyNeeded = Number(input[index]);
        index++;
        moneySaved = 0;
        
            } 
}
vacation(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);

