function examPrep(input) {

    let index = 0;

    let badGrades = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;

    let problemGrade = Number(input[index]);
    index++;

    let badGradesCount = 0;
    let maxBadGradesReached = false; 
    let totalGrades = 0;
    let gradesCount = 0;
    let lastProblem = '';
    

    while (problemName !== "Enough") {
        lastProblem = problemName;

        if (problemGrade <= 4) {
            badGradesCount++;
        }
        if (badGradesCount === badGrades) {
            maxBadGradesReached = true;
            break;
        }
        totalGrades += problemGrade;
        gradesCount++;

        problemName = input[index];
        index++;

        problemGrade = Number(input[index]);
        index++;


    } if (maxBadGradesReached) {
        console.log(`You need a break, ${badGrades} poor grades.`);
        
    } else {
        console.log(`Average score: ${(totalGrades / gradesCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
        
    }