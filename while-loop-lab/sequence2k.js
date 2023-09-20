function sequence2K (input) {
    let num = Number(input[0]);
    let curNum = 1;
    
    while (curNum <= num) {
        console.log(curNum);
        curNum = (curNum * 2 ) + 1; 
             
        

    } 
       
}
sequence2K (["3"]);

//всички числа ≤ n от редицата: 1, 3, 7, 15, 31, …. Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.
