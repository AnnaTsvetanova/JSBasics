function building (input) {

    let floorsCount = Number(input[0]);
    let roomsCount = Number(input[1]);

    
    for (let f = floorsCount; f > 0; f--) {

        let buff = ' ';

        for (let r = 0; r < roomsCount; r++) {
            
            if (f === floorsCount) {
                buff += `L${f}${r} `;
            } else if (f % 2 === 0) {
                buff += `O${f}${r} `;
            } else {            
                buff += `A${f}${r} `;
        }
    } 
    console.log(buff);
}
}
building(["6", "4"]);
