
function cinemaTickets (input) {
    let index = 0;

    let command = input[index];
    index++;

    let standardTicketsCount = 0;
    let studentTicketsCount = 0;
    let kidTicketsCount = 0;

    let totalTicketsCount = 0;

    while (command !== 'Finish') {

        let filmName = command; 
        let availableSeats = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let seatsTaken = 0;

        while (command1 !== 'End') {
            let ticketsType = command1;
            seatsTaken++;
        if (ticketsType === 'standard') {
            standardTicketsCount++;
            
        } else if (ticketsType === 'student') {
            studentTicketsCount++;
            
        } else if (ticketsType === 'kid') {
            kidTicketsCount++;
            
        } 
        if (availableSeats === seatsTaken) {
            break;
        }
        
        command1 = input[index];
        index++;
        
    } totalTicketsCount += seatsTaken;
    
    let percentTaken = (seatsTaken / availableSeats) * 100;
        console.log(`${filmName} - ${percentTaken.toFixed(2)}% full.`);
        command = input[index];
        index++;
        
    } if (command === 'Finish') {

        console.log(`Total tickets: ${totalTicketsCount}`);

        let percentStandardTickets = (standardTicketsCount / totalTicketsCount) * 100;
        let percentStudentTickets = (studentTicketsCount / totalTicketsCount) * 100;
        let percentKidTickets = (kidTicketsCount / totalTicketsCount) * 100;

        console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
        console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
        console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);

    }


}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);