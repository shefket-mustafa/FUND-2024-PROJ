function city2(object){

    let keys = Object.keys(object);

    for (const  key of keys) {
        
        let value =   object[key];
        console.log(`${key} -> ${value}`);
    }

}

city2({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })