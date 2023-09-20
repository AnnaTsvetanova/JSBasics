function circleAreaAndPerimeter(input) {
    
    let r = Number(input[0]);

    let calculatedArea = Math.PI * r * r;
    let calculatedPerimeter = 2 * Math.PI * r;

    console.log(calculatedArea.toFixed(2));
    console.log(calculatedPerimeter.toFixed(2));
}

circleAreaAndPerimeter([3])
