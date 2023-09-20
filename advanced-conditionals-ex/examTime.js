function examTime(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examHoursInMin = examHour * 60;
    let arrivalHoursInMin = arrivalHour * 60;

    if (examHour === arrivalHour && examMin === arrivalMin) {
        console.log("On time");
    } else if (examHour >= arrivalHour && examMin >= arrivalMin && ((examHoursInMin + examMin) - (arrivalHoursInMin + arrivalMin)) <= 30) {
                
        let minsEarly = (examHoursInMin + examMin) - (arrivalHoursInMin + arrivalMin);
        console.log("On time");
        console.log(`${minsEarly} minutes before the start`);

    } else if (examHour >= arrivalHour && ((examHoursInMin + examMin) - (arrivalHoursInMin + arrivalMin)) > 30 && ((examHoursInMin + examMin) - (arrivalHoursInMin + arrivalMin)) <= 60) {
        let minutesEarly = (examHoursInMin + examMin) - (arrivalHoursInMin + arrivalMin);
        console.log("Early");
        console.log(`${minutesEarly} minutes before the start`);

    } else if (examHour >= arrivalHour && ((examHoursInMin + examMin) - (arrivalHoursInMin + arrivalMin)) > 60) {
        let totalMinsEarly = (examHoursInMin + examMin) - (arrivalHoursInMin + arrivalMin);
        let hoursEarly = Math.trunc(totalMinsEarly / 60);
        let minutesEarly = Math.floor(totalMinsEarly % 60);
        

        if (minutesEarly < 10) {
            console.log(`${hoursEarly}:0${minutesEarly} hours before the start`);
        } else {
            console.log(`${hoursEarly}:${minutesEarly} hours before the start`);
        }
    } else if (examHour < arrivalHour && ((arrivalHoursInMin + arrivalMin) - (examHoursInMin + examMin)) < 60) {

    let minsLate = (arrivalHoursInMin + arrivalMin) - (examHoursInMin + examMin);
    console.log("Late");
    console.log(`${minsLate} minutes after the start`);

    } else if (examHour < arrivalHour && ((arrivalHoursInMin + arrivalMin) - (examHoursInMin + examMin)) >= 60) {
    let totalMinsEarly = (arrivalHoursInMin + arrivalMin) - (examHoursInMin + examMin);
    let hoursLate = Math.trunc(totalMinsEarly / 60);
    let minsLate = Math.floor(totalMinsEarly % 60);
    

    if (minsLate < 10) {
        console.log(`${hoursLate}:0${minsLate} hours after the start`);
    } else {
        console.log(`${hoursLate}:${minsLate} hours after the start`);
    }
}
}


examTime(["14", "55", "13", "55"]);

