function bonusPoints(input) {

    let initialPoints = Number(input[0]);
    let bonus = 0;

    if (initialPoints <= 100) {
        bonus = 5;
    } else if(initialPoints > 100 && initialPoints <= 1000) {
        bonus = 0.20 * initialPoints;
    } else if(initialPoints > 1000) {
        bonus = 0.10 * initialPoints;
    }

    if(initialPoints % 2 === 0){
        bonus = bonus + 1;
    } else if(initialPoints % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(initialPoints + bonus);    
}

bonusPoints(["175"])

