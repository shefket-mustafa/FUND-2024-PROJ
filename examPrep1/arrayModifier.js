function arrayModifier(array){

    let initialValues= array.shift();
    let values=initialValues.split(" ");

    let elements= array.shift();

    let command=elements.split(" ");
    let action=command.shift();

    while(action!=="end"){

        if(action==='swap'){
            
            let startIndex=command.shift();
            let endIndex=command.shift();

            let firstSwap=values.splice(startIndex,1,values[endIndex]);

            let secondSwap=values.splice(endIndex,1,firstSwap+"");
            

        } else if(action==='multiply'){

            let firstIndex=command.shift();
            let lastIndex=command.shift();
            
            let firstNumMultily= values.splice(firstIndex,1);
            values.splice(firstIndex,0,Number(firstNumMultily));

            let lastNumToMultiply=values.splice(lastIndex,1);
            values.splice(lastIndex,0,Number(lastNumToMultiply));

            let multiply= values.splice(firstIndex,1,firstNumMultily*lastNumToMultiply);
        } else if(action==='decrease'){
            for (let i = 0; i < values.length; i++) {
                Number(values[i]-=1);
                
            }
        }



        
        elements=array.shift();
        command=elements.split(" ");
        action=command.shift();
    }
    console.log(values.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])