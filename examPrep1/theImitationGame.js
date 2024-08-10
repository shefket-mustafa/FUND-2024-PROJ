function imitation(array){

    let message=array.shift();
    
    let tokens=array.shift().split("|");
    let command=tokens.shift();
    

    while(command!=='Decode'){
        if(command==='Move'){
            const index=Number(tokens.shift());

            for (let i = 0; i < index; i++) {
                
                
            }
        }


        command=tokens.shift();
    }
}   

imitation([

    'owyouh',
    
    'Move|2',
    
    'Move|3',
    
    'Insert|3|are',
    
    'Insert|9|?',
    'Decode'
    
    ]);