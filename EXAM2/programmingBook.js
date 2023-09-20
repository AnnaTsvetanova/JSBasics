function programmingBook (input) {
    let pricePerPage = Number(input[0]);
    let pricePerCover = Number(input[1]);
    let percentDisountPerPaper = Number(input[2]) / 100;
    let designerPrice = Number(input[3]);
    let percentPaidByTeam = Number(input[4]) / 100;

    let totalPagesPrice = pricePerPage * 899;
    let totalCoverPrice = pricePerCover * 2;
    let totalPrice = totalCoverPrice + totalPagesPrice;
    let priceAfterPaperDiscount = totalPrice - totalPrice * percentDisountPerPaper; 

    totalPrice = priceAfterPaperDiscount + designerPrice;

    let finalPrice = totalPrice - totalPrice * percentPaidByTeam;

    console.log(`Avtonom should pay ${finalPrice.toFixed(2)} BGN.`);
}
programmingBook(["0.01", "1", "10", "20", "20"]);

