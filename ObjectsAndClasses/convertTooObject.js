function convert(jsonString){

    let person = JSON.parse(jsonString);
    const tuples = Object.entries(person);
    
    for (const tuple of tuples) {
    
        console.log(`${tuple[0]}: ${tuple[1]}`);
        
    }
} 

convert('{"name": "George", "age": 40, "town": "Sofia"}');