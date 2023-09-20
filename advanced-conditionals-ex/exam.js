function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);
 
    let examTimeInMin = examHour * 60 + examMin;
    let arrivalTimeInMin = arrivalHour * 60 + arrivalMin;
    let calcDifference = examTimeInMin - arrivalTimeInMin;
 
    if (calcDifference < 0) {
        console.log("Late");
        if (calcDifference >= -59) {
            let minsLate = arrivalTimeInMin - examTimeInMin;
            console.log(`${minsLate} minutes after the start`);
        } else {
            let hoursLate = Math.floor((arrivalTimeInMin - examTimeInMin) / 60);
            let minsLate = (arrivalTimeInMin - examTimeInMin) % 60;
            if (minsLate < 10) {
                console.log(`${hoursLate}:0${minsLate} hours after the start`);
            } else {
                console.log(`${hoursLate}:${minsLate} hours after the start`);
            }
        }
    } else if (calcDifference === 0 || calcDifference <= 30) {
        console.log("On time");
        if (calcDifference <= 59 && calcDifference !== 0) {
            let minsEarly = examTimeInMin - arrivalTimeInMin;
            console.log(`${minsEarly} minutes before the start`);
        } else if (calcDifference === 0) {
        } else {
            let hoursEarly = Math.floor((examTimeInMin - arrivalTimeInMin) / 60);
            let minsEarly = (examTimeInMin - arrivalTimeInMin) % 60;
            if (minsEarly < 10) {
                console.log(`${hoursEarly}:0${minsEarly} hours before the start`);
            } else {
                console.log(`${hoursEarly}:${minsEarly} hours before the start`);
            }
        }
    } else if (calcDifference > 30) {
        console.log("Early");
        if (calcDifference <= 59) {
            let minsEarly = examTimeInMin - arrivalTimeInMin;
            console.log(`${minsEarly} minutes before the start`);
        } else {
            let hoursEarly = Math.floor((examTimeInMin - arrivalTimeInMin) / 60);
            let minsEarly = (examTimeInMin - arrivalTimeInMin) % 60;
            if (minsEarly < 10) {
                console.log(`${hoursEarly}:0${minsEarly} hours before the start`);
            } else {
                console.log(`${hoursEarly}:${minsEarly} hours before the start`);
            }
        }
    }

    }

