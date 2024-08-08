function subset(array){

    let number=array.shift();
    let numbers=[];
    numbers.push(number);
    
    for (let i = 0; i < array.length; i++) {

            if(number<=array[i]){
                number=array[i];
                numbers.push(number);
            }
    }
    console.log(numbers.join(" "));
}

subset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);