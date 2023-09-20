function puppyCare(input) {
    let index = 0;
    let food = Number(input[index]) * 1000;
    index++;

    let command = input[index];
    let foodEaten = 0;

    while (command !== 'Adopted') {

        let foodPerMeal = Number(input[index]);
        foodEaten += foodPerMeal;

        command = input[index];
        index++;

    } if (command === 'Adopted') {
        

        if (foodEaten <= food) {
            let foodLeft = food - foodEaten;
            console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
        } else {
            let foodNeeded = foodEaten - food;
            console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
        }
    }

}
puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);

