function convertToJason(name,lastName,hairColor){
    let person = {
        name,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(person));
}

convertToJason('George', 'Jones',

'Brown')