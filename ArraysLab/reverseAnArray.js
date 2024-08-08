
function reverse(input,array){

    let newArray=[];
    let finalArray="";
    for(let i=0;i<input;i++){
    newArray.push(array[i]);
    
    }

    for(let i =newArray.length-1; i>=0;i--){
        finalArray+=newArray[i]+" ";
    }
    console.log(finalArray);

    
    
}
reverse(3, [10, 20, 30, 40, 50]);