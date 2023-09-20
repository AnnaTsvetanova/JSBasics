function oldLibrary(input) {

    let index = 0;

    let bookSearched = input[index];
    index++; 


    let currBook = input[index];
    index++;

    booksCount = 0;
    let isFound = false;

    while (currBook !== "No More Books") {

        if (currBook === bookSearched) {
            isFound = true;
            break;
        } 
        booksCount++;
        currBook = input[index];
        index++;

    } if(isFound){
        console.log(`You checked ${booksCount} books and found it.`);
    } else {
            console.log("The book you search is not here!");
            console.log(`You checked ${booksCount} books.`);
        }
        
    }
    