function numsEndingIn7 () {


    for (let i = 7; i <= 997; i++) {
        let currentNum = i;
        if (currentNum % 10 === 7) 
        console.log(currentNum);
    } 

}
numsEndingIn7();