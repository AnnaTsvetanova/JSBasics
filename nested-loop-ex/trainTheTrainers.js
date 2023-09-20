function trainTheTrainers (input) {

    let index = 0;

    let juryCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalGradeSum = 0;
    let totalGradeCount = 0;
    
    
    while (command !== 'Finish') {
        let presentationName = command; 
        let gradeSum = 0;


        for (let  i = 0; i < juryCount; i++) {
            let curGrade = Number(input[index]);
            index++;

            gradeSum += curGrade;
            totalGradeSum += curGrade;
            totalGradeCount++;
        }
        let avrGrade = gradeSum / juryCount;
        console.log( `${presentationName} - ${avrGrade.toFixed(2)}.`);
        
        
        command = input[index];
        index++;

} if (command === 'Finish') {
    let totalAvgGrade = totalGradeSum / totalGradeCount;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);

}    

}
trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);
