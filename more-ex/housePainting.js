function housePainting(input) {
    
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wallsArea = 2 * (x * y) - 2 * (1.5 * 1.5) + 2 * (x * x) - 2 * 1.2;
    let roofArea = 2 * (x * y) + 2 * (x * h / 2);

    let greenPaint = wallsArea / 3.4;
    let redPaint = roofArea / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["6" , "10" , "5.2"])