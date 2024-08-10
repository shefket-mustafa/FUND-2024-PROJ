function numbers(array) {

    let sumOfNumbers=0;
    let newArray=[];
    let newestArray=[];
    
    let numbers=array.split(" ");
    for(let i=0 ; i<numbers.length;i++){
        sumOfNumbers+=Number(numbers[i]);
        
    }
    let average = sumOfNumbers/numbers.length;
    

    for (let j = 0; j < numbers.length; j++) {
        if(Number(numbers[j]>average)){
            newArray.push(numbers[j]);

            
            
        }
        }
    
        if(newArray.length===0){
            console.log("No");
            return;
        }
    newArray.sort((a,b)=> b-a);
    for (let j = 0; j < 5; j++) {
        newestArray.push(newArray[j]);
        
    }
    console.log(newestArray.join(" "));
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');