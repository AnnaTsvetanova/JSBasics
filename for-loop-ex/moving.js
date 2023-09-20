function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++;

    let numBoxes = input[index];
    index++; 

    let volume = width * height * length;
    

    while (numBoxes !== 'Done') {
        numBoxes = Number(numBoxes);
        volume -= numBoxes;

        

        if (volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            return;
        
        }  
        numBoxes = input[index];
        index++;
       

    } console.log(`${volume} Cubic meters left.`);

} 
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])


