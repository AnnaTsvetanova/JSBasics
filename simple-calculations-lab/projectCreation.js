function projectCreation (input) {
    let name = input[0];
    let numberOfHours = input[1] * 3
    
    console.log(`The architect ${name} will need ${numberOfHours} hours to complete ${input[1]} project/s.`) 
}
projectCreation (['George' , 4])