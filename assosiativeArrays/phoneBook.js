function phoneBook(array){

        let book={};


    for (const details of array) {
        let splitted=details.split(" ");
        
        let name=splitted[0];
        let value=splitted[1];
        book[name] = value;
    }

    for (const key in book) {
        console.log(`${key} -> ${book[key]} `);
    }

}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);