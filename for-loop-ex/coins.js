function coins (input) {

    let change = Number(input[0]);
    let stotinki = Math.trunc(change * 100);
    let coinsCount = 0;

    while (stotinki > 0) {
        if (stotinki >= 200) {
            coinsCount++;
            stotinki -= 200;
        } else if (stotinki >= 100) {
            coinsCount++;
            stotinki -= 100;
        } else if (stotinki >= 50) {
            coinsCount++;
            stotinki -= 50;
        } else if (stotinki >= 20) {
            coinsCount++;
            stotinki -= 20;
        } else if (stotinki >= 10) {
            coinsCount++;
            stotinki -= 10;
        } else if (stotinki >= 5) {
            coinsCount++;
            stotinki -= 5;
        } else if (stotinki >= 2) {
            coinsCount++;
            stotinki -= 2;
        } else if (stotinki >= 1) {
            coinsCount++;
            stotinki -= 1;
        } 
    } console.log(coinsCount);

}
coins(["1.23"])