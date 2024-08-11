function city(object){

    

    let entries=Object.entries(object);

    for (let i = 0; i < entries.length; i++) {
        console.log(`${entries[i][0]} -> ${entries[i][1]}`);
        
    }
}

city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    });
