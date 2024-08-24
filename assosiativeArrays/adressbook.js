function adressBook(array){
    let book={};


    for (const key of array) {
        let [name,adress] = key.split(":");
        book[name]= adress;
         
    }
    const entries=Object.entries(book);
    entries.sort(([keyA,valueA],[keyB,valueB]) => {
        return keyA.localeCompare(keyB);
    });
    
    
    for (const [name,adress] of entries) {
            console.log(`${name} -> ${adress}`);
    }

}
    
    

adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);