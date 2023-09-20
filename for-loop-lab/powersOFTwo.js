function powersOfTwo (input) {

    let n = Number(input[0]);
    let result = 0;
    for (let i = 0; i <= n; i++) {

        if (i % 2 === 0) {
            result = Math.pow(2,i)
            console.log(result);
        }
        }

}
powersOfTwo (["3"]);
