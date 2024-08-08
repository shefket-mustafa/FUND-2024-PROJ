function printTheNth(array) {
    const NthElement=Number(array.pop());

    let newArray=[];

    for (let i = 0; i < array.length; i+=NthElement) {
        newArray.push(array[i]);
        
    }
    console.log(newArray.join(" "));
}

printTheNth(['1', '2', '3', '4', '5', '6']);