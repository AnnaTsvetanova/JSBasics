function histogram (input) {

    let numCount = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= numCount; i++) {
        let num = Number(input[i]);
        
        if (num < 200) {
            count1++;
        } else if (num <= 399) {
            count2++;
        } else if (num <= 599) {
            count3++
        } else if (num <= 799) {
            count4++ 
        } else {
            count5++
        }

    }
    let p1 = (count1 / numCount) * 100;
    let p2 = (count2 / numCount) * 100;
    let p3 = (count3 / numCount) * 100;
    let p4 = (count4 / numCount) * 100;
    let p5 = (count5 / numCount) * 100;
    
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["3","1","2","999"])


